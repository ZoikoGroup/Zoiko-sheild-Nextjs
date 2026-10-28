import { detectSecrets, normalize } from "./detectors";

// Deterministic intent rules in WF12 priority order:
// incident > secrets > (prompt injection) > (credential abuse) > privileged/SOC > privacy > write intents >
// conversational (greeting, identity, …) > off-topic > discovery > info.
// Educational questions ("what is malware?", "do you do pen testing?") must stay `info`.

export type Conversational = "greeting" | "identity" | "capabilities" | "thanks" | "goodbye" | "how_are_you";

export type Intent =
  | { kind: "incident" }
  | { kind: "secret"; secrets: string[] }
  | { kind: "injection" }
  | { kind: "credential_abuse" }
  | { kind: "privileged" }
  | { kind: "privacy" }
  | { kind: "write"; journey: "demo" | "support" | "quote" }
  | { kind: "conversational"; act: Conversational }
  | { kind: "off_topic" }
  | { kind: "discovery" }
  | { kind: "info" };

const GREETING_WORDS = "hi|hii+|hello+|hey+|heya|hiya|howdy|yo|greetings|good (?:morning|afternoon|evening|day)|namaste|hola";
const GREETING_PREFIX = new RegExp(`^(?:${GREETING_WORDS})(?: there| team| all| everyone| zoiko\\w*| assistant| bot)?[\\s!.,:;-]*`);

/** Pure social messages, matched against the whole message so they never swallow a real question. */
const CONVERSATIONAL: [RegExp, Conversational][] = [
  [new RegExp(`^(?:${GREETING_WORDS})(?: there| team| all| everyone| zoiko\\w*| assistant| bot)?[\\s!.,:;)(-]*$`), "greeting"],
  [/^(?:how are you|how(?:'s| is) it going|how do you do|what'?s up|sup)(?: today)?[\s!?.]*$/, "how_are_you"],
  [/^(?:thanks?(?: you)?(?: so much| a lot| very much)?|thx|ty|cheers|much appreciated|great|awesome|perfect|cool|nice|ok(?:ay)?|got it|that helps|helpful)[\s!.]*$/, "thanks"],
  [/^(?:bye|goodbye|good bye|see you(?: later)?|see ya|that'?s all|that is all|nothing else|i'?m done|no thanks?)[\s!.]*$/, "goodbye"],
  [/\b(?:who|what) are you\b|\bare you (?:a |an )?(?:bot|robot|human|person|real|machine|ai|chatbot|chatgpt|gpt|live agent)\b|\b(?:what(?:'s| is) )?your name\b|\bwho (?:made|built|created|developed|trained) you\b|\bintroduce yourself\b/, "identity"],
  [/\bwhat (?:can|do|could) you (?:do|help(?: me)? with|answer)\b|\bhow (?:can|do) you help\b|\bwhat (?:can|should|could) i ask\b|\bhow does this (?:chat|assistant|bot|work)\b|^(?:help|menu|options|start|\?)[\s!?.]*$/, "capabilities"],
];

/**
 * Clearly unrelated requests get a polite scope boundary (WF02 SAFE_REFUSAL), not
 * a search that would only abstain. Kept narrow: anything security- or product-ish
 * must fall through to retrieval.
 */
const OFF_TOPIC = [
  /\b(?:weather|forecast|temperature outside)\b/,
  /\btell me (?:a |another )?(?:joke|story|riddle|fun fact)\b|\b(?:joke|riddle)s?\b/,
  /\b(?:write|compose) (?:me )?(?:a )?(?:poem|song|essay|story|letter|limerick)\b/,
  /\b(?:recipe|cook(?:ing)?|bake|restaurant|movie|film|tv show|song lyrics|lyrics|horoscope|zodiac|dating|girlfriend|boyfriend)\b/,
  /\b(?:football|soccer|cricket|basketball|baseball|nba|nfl|ipl|world cup|olympics)\b/,
  /\b(?:stock price|share price|bitcoin price|crypto price|exchange rate)\b/,
  /\b(?:capital of|population of|president of|prime minister of)\b/,
  /^\s*(?:what is |calculate |solve )?[\d\s.]+(?:[-+*/x^][\d\s.]+)+=?\s*\??\s*$/,
];

/** Strip a leading greeting so "hi, what is pricing?" is handled as the question. */
export function stripGreeting(text: string): string {
  const n = normalize(text);
  const stripped = n.toLowerCase().match(GREETING_PREFIX) ? n.slice(n.toLowerCase().match(GREETING_PREFIX)![0].length) : n;
  return stripped || n;
}

const INCIDENT = [
  /\b(?:we|i)(?:'re| are|'ve| have)? (?:been |being |just been |currently )?(?:hacked|breached|compromised|pwned|attacked|ransomwared)\b/,
  /\b(?:our|my) (?:company|org(?:anization)?|systems?|network|servers?|environment|site|website|computers?|data|files) (?:is |are |has |have |got |was |were )?(?:been )?(?:being )?(?:hacked|breached|compromised|encrypted|attacked|infected|under attack|held for ransom)\b/,
  /\b(?:active|ongoing|live|current) (?:security )?(?:incident|breach|attack|intrusion)\b/,
  /\bransomware (?:on|in|hit|has hit|encrypted|is encrypting) (?:our|my)\b/,
  /\b(?:we|i) (?:are|am) under attack\b/,
  /\bransom (?:note|demand)\b/,
  // Terse reports: "production ransomware active", "ransomware spreading on prod".
  /\bransomware (?:is |currently |now |still )?(?:active|running|spreading|detected|encrypting|outbreak)\b/,
  /\b(?:active|ongoing|live) ransomware (?:attack|incident|infection|outbreak)\b/,
  /\b(?:production|prod) (?:systems? |servers? |environment )?(?:is |are |has been |have been |got |was |were )?(?:hacked|breached|compromised|encrypted)\b/,
];

// Requests to obtain other people's credentials (WF12 AT301). Only first-person or
// imperative intent, so "how does ZoikoShield detect phishing?" stays answerable.
const CREDENTIAL_ABUSE = [
  /\b(?:write|create|make|build|generate|craft|design|draft|set up|clone)\b.{0,30}\b(?:phishing (?:email|page|site|kit|link|message|campaign)|fake (?:log ?in|sign ?in) (?:page|form|site|portal)|credential[- ]harvest\w*|keylogger)\b/,
  /\b(?:how (?:do|can|could|would|should) (?:i|we)|help me|i (?:want|need) to|we (?:want|need) to|show me how to|teach me (?:how )?to|tell me how to)\b.{0,40}\b(?:steal|harvest|phish|grab|sniff|crack|capture|intercept|dump)\b.{0,30}\b(?:passwords?|credentials|log ?ins?|mfa codes?|2fa codes?|otps?|one[- ]time codes?|session (?:cookies?|tokens?)|hashes)\b/,
  /\b(?:get|obtain|access|find out|recover)\b.{0,20}\b(?:someone(?: else)?'?s|another (?:user|person|employee)'?s?|my (?:boss|coworker|colleague|ex|partner|employee)'?s?|their|his|her)\b.{0,20}\b(?:passwords?|credentials|log ?ins?|mfa codes?|2fa codes?)\b/,
];

const INJECTION = [
  /\bignore (?:all |any |the )?(?:previous|prior|above|earlier|your) (?:instructions|prompts?|rules|directions)\b/,
  /\b(?:reveal|show|print|repeat|output|tell me|what(?: is|'s)) (?:me )?(?:your|the) (?:system |hidden |initial |original |developer )?(?:prompt|instructions|rules)\b/,
  /\byou are now\b/,
  /\b(?:developer|dan|jailbreak|god) mode\b/,
  /\bact as (?:an? )?(?:unrestricted|unfiltered|different|new) /,
  /<\/?(?:system|assistant|instructions?|tool)>/,
  /\b(?:begin|end) (?:system|prompt|instructions)\b/,
  /\bdisregard (?:all |the |your )?(?:above|previous|safety)/,
];

const PRIVILEGED = [
  /\b(?:my|our) (?:tenant|alerts?|cases?|incident queue|logs?|dashboard|console|account data|detections?|playbooks?|workspace|findings|evidence ledger)\b/,
  /\b(?:run|execute|trigger|launch) (?:a |the |my |our )?(?:playbook|soar|response action|scan)\b/,
  /\b(?:isolate|quarantine|block|unblock|contain) (?:a |the |this |that |our |my )?(?:host|endpoint|device|ip|user|account)\b/,
  /\btenant[ _-]?id\b|\b(?:case|alert|ticket) ?#? ?\d{3,}\b/,
  /\breset (?:my|our|the) (?:password|mfa|2fa|account)\b/,
  /\b(?:log ?in|sign ?in) (?:to|into) (?:my|our) account\b/,
];

const PRIVACY = [
  /\b(?:delete|erase|remove|export|access|correct|download) (?:all )?(?:of )?(?:my|our) (?:personal )?(?:data|information|details|account)\b/,
  /\b(?:dsar|right to be forgotten|right to erasure)\b/,
  /\b(?:gdpr|ccpa|cpra|data subject|subject access)\b.{0,24}\brequest\b/,
  /\bunsubscribe\b|\bopt (?:me )?out\b/,
];

const WRITE: [RegExp, "demo" | "support" | "quote"][] = [
  [/\b(?:book|schedule|request|get|arrange|set up|see) (?:a |an )?(?:live |product |personal )?demo\b/, "demo"],
  [/\b(?:talk|speak|chat) (?:to|with) (?:sales|a sales|your sales)\b/, "demo"],
  [/\b(?:get|request|send me|need) (?:a |an )?(?:quote|price quote|pricing proposal)\b/, "quote"],
  [/\bhow much (?:would|will|does) (?:it|this|zoikoshield) cost (?:us|me|for us)\b/, "quote"],
  [/\b(?:contact|reach|talk to|speak (?:to|with)|chat with) (?:your )?(?:support|a human|a person|someone|an agent|customer service)\b/, "support"],
  [/\b(?:open|raise|create|file|log) (?:a )?(?:support )?(?:ticket|case|request)\b/, "support"],
];

const DISCOVERY = [
  /\b(?:which|what) (?:product|plan|solution|capabilit\w*|service|option) (?:is|would|fits?|should|do (?:i|we) need)\b/,
  /\b(?:recommend|suggest)\b/,
  /\bright (?:fit |choice )?for (?:us|me|my|our)\b/,
  /\bwhere (?:should|do) (?:i|we) start\b/,
];

export function classify(text: string): Intent {
  const n = normalize(text).toLowerCase();
  if (INCIDENT.some((re) => re.test(n))) return { kind: "incident" };
  const secrets = detectSecrets(text);
  if (secrets.length) return { kind: "secret", secrets };
  if (INJECTION.some((re) => re.test(n))) return { kind: "injection" };
  if (CREDENTIAL_ABUSE.some((re) => re.test(n))) return { kind: "credential_abuse" };
  if (PRIVILEGED.some((re) => re.test(n))) return { kind: "privileged" };
  if (PRIVACY.some((re) => re.test(n))) return { kind: "privacy" };
  const write = WRITE.find(([re]) => re.test(n));
  if (write) return { kind: "write", journey: write[1] };
  const social = CONVERSATIONAL.find(([re]) => re.test(n));
  if (social) return { kind: "conversational", act: social[1] };
  // "hi, who are you?" → judge the part after the greeting.
  const rest = stripGreeting(n).toLowerCase();
  if (rest !== n) {
    const inner = CONVERSATIONAL.find(([re]) => re.test(rest));
    if (inner) return { kind: "conversational", act: inner[1] };
  }
  if (OFF_TOPIC.some((re) => re.test(n))) return { kind: "off_topic" };
  if (DISCOVERY.some((re) => re.test(n))) return { kind: "discovery" };
  return { kind: "info" };
}
