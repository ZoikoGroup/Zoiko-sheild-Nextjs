import { detectSecrets, normalize } from "./detectors";

// Deterministic intent rules in WF12 priority order:
// incident > secrets > (prompt injection) > (credential abuse) > privileged/SOC > privacy > write intents >
// conversational (greeting, identity, …) > off-topic > discovery > info.
// Educational questions ("what is malware?", "do you do pen testing?") must stay `info`.

export type Conversational = "greeting" | "identity" | "capabilities" | "limits" | "thanks" | "goodbye" | "how_are_you";

export type Intent =
  | { kind: "incident" }
  | { kind: "secret"; secrets: string[] }
  | { kind: "injection" }
  | { kind: "credential_abuse" }
  | { kind: "privileged" }
  | { kind: "privacy" }
  | { kind: "assistant_privacy" }
  | { kind: "commercial_terms"; topic?: "trial" | "refund" | "billing_terms" | "plan_names" }
  | { kind: "privacy_compliance"; regime: string; privacy: boolean }
  | { kind: "data_residency" }
  | { kind: "integration"; vendors: string[]; microsoft: boolean }
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
  [/^(?:thanks?(?: you)?(?: so much| a lot| very much)?|thx|ty|cheers|much appreciated|great|awesome|perfect|cool|nice|ok(?:ay)?|got it|that helps|helpful)(?:[\s!.,;-]+(?:thanks?(?: you)?|thx|that(?:'s| is| was)? (?:helpful|great|perfect|useful|clear)|that helps|very helpful|got it|great|perfect|awesome|cool|nice|ok(?:ay)?))*[\s!.]*$/, "thanks"],
  [/^(?:bye|goodbye|good bye|see you(?: later)?|see ya|that'?s all|that is all|nothing else|i'?m done|no thanks?)[\s!.]*$/, "goodbye"],
  [/\bwhat (?:can'?t|cannot|can not|won'?t|are you not able to|aren'?t you able to)(?: you)? (?:do|help|answer)\b|\bwhat (?:can|do|could) you not (?:do|help|answer)\b|\b(?:your|the assistant'?s) (?:limits|limitations|restrictions)\b|\bwhat you (?:can'?t|cannot|can not) (?:do|help|answer)\b|\bwhat are you not (?:able|allowed)\b/, "limits"],
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
  /\bwho (?:won|wins|is winning|scored|plays)\b|\b(?:match|game|score)s? (?:yesterday|tonight|today|last night)\b/,
  /\b(?:write|give|show) me (?:a |some )?(?:python|javascript|java|c\+\+|sql|bash|html|css) (?:script|code|function|program|snippet|query)\b|\b(?:sort|reverse) a list\b/,
  /\b(?:quantum computing|machine learning|blockchain basics|general relativity|photosynthesis)\b/,
  /\btranslate\b.{0,40}\b(?:to|into) (?:spanish|french|german|hindi|chinese|japanese|italian|portuguese|arabic|russian|telugu|tamil)\b/,
  /\bprice of (?:bitcoin|btc|ethereum|eth|crypto|gold|oil|silver|a stock)\b/,
  /\b(?:programming language|lose weight|weight loss|eiffel tower|elon musk|taylor swift|best (?:movie|book|laptop|phone|car|restaurant)|how to (?:cook|bake|lose weight|learn guitar))\b/,
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
  // "We are under a ransomware attack right now", "dealing with a breach".
  /\b(?:we|i)(?:'re| are| am) (?:currently |right now |now )?(?:under|facing|experiencing|dealing with|getting hit by|being hit by) (?:an? )?(?:active |ongoing |live )?(?:ransomware|cyber ?attack|attack|breach|intrusion|ddos)\b/,
  /\bunder (?:an? )?(?:ransomware |cyber ?|active )?attack\b/,
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
  /\b(?:forget|drop|discard|override|ignore) (?:all |any |the |your |these )?(?:rules|instructions|guidelines|restrictions|guardrails|safety)\b/,
  /\bpretend (?:that )?(?:you(?:'re| are)|to be)\b|\bunrestricted (?:ai|assistant|mode|model|bot)\b|\bno (?:rules|restrictions|filters|limits)\b/,
  /\b(?:developer|dan|jailbreak|god) mode\b/,
  /\bact as (?:an? )?(?:unrestricted|unfiltered|different|new) /,
  /<\/?(?:system|assistant|instructions?|tool)>/,
  /\b(?:begin|end) (?:system|prompt|instructions)\b/,
  /\bdisregard (?:all |the |your )?(?:above|previous|safety)/,
  /\b(?:what(?: is|'s)|give me|share|show|tell me|send me) (?:me )?(?:your|the system'?s?|the admin'?s?|the company'?s?) (?:api keys?|secret keys?|secrets?|passwords?|access tokens?|tokens?|credentials|private keys?)\b/,
  /\b(?:exfiltrat\w*|steal|dump|leak) (?:the |all |any )?(?:secrets?|credentials|passwords?|api keys?|tokens?|database)\b/,
];

const PRIVILEGED = [
  /\b(?:other|another|different|all) (?:customers?|tenants?|clients?)(?:'s|s')?\b.{0,30}\b(?:data|alerts?|cases?|logs?|information|details|environments?|accounts?)\b|\b(?:data|alerts?|cases?|logs?|information|details|accounts?)\b.{0,30}\b(?:of|from|for|about) (?:other|another|different|all|any) (?:customers?|tenants?|clients?)\b/,
  /\b(?:my|our) (?:tenant|alerts?|cases?|incident queue|logs?|dashboard|console|account data|detections?|playbooks?|workspace|findings|evidence ledger)\b/,
  /\b(?:run|execute|trigger|launch) (?:a |the |my |our )?(?:playbook|soar|response action|scan)\b/,
  /\b(?:isolate|quarantine|block|unblock|contain) (?:a |the |this |that |our |my )?(?:host|endpoint|device|ip|user|account)\b/,
  /\btenant[ _-]?id\b|\b(?:case|alert|ticket) ?#? ?\d{3,}\b/,
  /\breset (?:my|our|the) (?:password|mfa|2fa|account)\b/,
  /\b(?:disable|turn off|enable|turn on|reset|remove) (?:mfa|2fa|multi-factor)\b.{0,30}\b(?:for|on)\b/,
  /\b(?:where|how) (?:do|can|should) (?:i|we) (?:sign|log) ?in\b/,
  /\b(?:give|grant|get) (?:me|us) (?:admin|administrator|root|superuser|owner) (?:access|rights|privileges|permissions)\b/,
  /\b(?:log ?in|sign ?in) (?:to|into) (?:my|our) account\b/,
];

const PRIVACY = [
  /\b(?:delete|erase|remove|export|access|correct|download) (?:all )?(?:of )?(?:my|our) (?:personal )?(?:data|information|details|account)\b/,
  /\b(?:dsar|right to be forgotten|right to erasure)\b/,
  /\b(?:gdpr|ccpa|cpra|data subject|subject access)\b.{0,24}\brequest\b/,
  /\bunsubscribe\b|\bopt (?:me )?out\b/,
  /\b(?:erase|delete|remove|forget|wipe)\b.{0,20}\b(?:everything|anything|all|whatever)\b.{0,30}\b(?:about|on) (?:me|us)\b|\bforget (?:me|us)\b/,
];

// Cookie and tracking choices are answered from the Cookie Notice, not the data-rights flow.
const COOKIE_CHOICE = /\b(?:cookies?|tracking|trackers?|analytics|gpc|global privacy control)\b/;

// Questions about what this chat itself keeps (not a data-rights request, which is PRIVACY above).
const ASSISTANT_PRIVACY = [
  /\b(?:chat ?bot|assistant|this chat|this bot|you)\b.{0,40}\b(?:stor(?:e|es|ing)|sav(?:e|es|ing)|record(?:s|ing)?|log(?:s|ging)?|track(?:s|ing)?|keep(?:s|ing)?|retain(?:s|ing)?|read(?:s|ing)?)\b.{0,40}\b(?:messages?|conversations?|questions?|chats?|what i (?:type|say|write|ask)|my (?:input|answers?))\b/,
  /\b(?:chat ?bot|assistant|this chat|this bot)\b.{0,40}\b(?:stor(?:e|es|ing)|sav(?:e|es|ing)|record(?:s|ing)?|log(?:s|ging)?|track(?:s|ing)?|keep(?:s|ing)?|retain(?:s|ing)?)\b.{0,30}\bdata\b/,
  /\b(?:do|will|can) (?:you|this (?:chat|bot)) (?:remember|recall)\b.{0,30}\b(?:previous|past|earlier|last|our|my)\b/,
  /\b(?:are|is) (?:my|our) (?:messages?|conversations?|chats?|questions?) (?:private|confidential|stored|saved|recorded|logged|kept|tracked)\b/,
  /\b(?:messages?|conversations?|chats?)\b.{0,30}\b(?:sent to|shared with) (?:analytics|third part\w+|anyone)\b/,
  /\b(?:is|are) (?:this|the) (?:chat|assistant|chatbot|bot) (?:private|confidential|secure|safe)\b/,
  /\b(?:send|sent|share|shared|forward|pass)\w*\b.{0,30}\b(?:chats?|messages?|conversations?|questions?)\b.{0,30}\b(?:analytics|third part\w+|anyone|ai|advertis\w+)\b/,
];

// Discounts and special terms are the commercial team's call, never the chat's.
const COMMERCIAL_TERMS = [
  /\b(?:discounts?|negotiat\w*|cheaper|promo(?:tion|tional)?(?: code)?|coupon|special (?:price|rate|offer|deal)|price match|lower (?:the |your )?price|best price|price break|volume pricing)\b/,
];

// Refunds and guarantees: no money-back or refund terms are published.
const REFUND = [/\b(?:money[- ]?back|refunds?|refundable|cancellation (?:fee|policy)|cancel (?:my|our|the) (?:subscription|contract))\b/];

// Billing frequency and payment terms: only "annual subscription" for the Base Platform is published.
const BILLING_TERMS = [
  /\b(?:annual|yearly|monthly|quarterly) (?:billing|payments?|invoic\w+|subscriptions?|contracts?|plans?|terms?)\b/,
  /\b(?:billing (?:cycle|frequency|period|terms?)|payment (?:terms?|methods?|options?|schedule)|pay (?:monthly|annually|yearly|quarterly|by (?:card|invoice)))\b/,
];

// Named or "best" plans: the site publishes commercial domains, not fixed named tiers.
const PLAN_NAMES = [
  /\b(?:best|cheapest|smallest|recommended|suitable|ideal)\b.{0,20}\b(?:plan|tier|package|edition)\b|\b(?:plan|tier|package|edition)\b.{0,30}\b(?:best|suits?|suitable|ideal)\b/,
  /\b(?:starter|basic|premium|professional|standard|team|business)\b.{0,20}\b(?:plan|tier|edition|package)\b|\b(?:starter|basic|premium|professional)\b.{0,30}\b(?:and|vs|versus|or|enterprise)\b/,
  /\b(?:difference|differences|compare|comparison|versus|vs)\b.{0,40}\benterprise\b|\benterprise\b.{0,20}\b(?:vs|versus)\b/,
];

// Privacy-law compliance claims: the Privacy Notice describes bases and rights; it asserts no compliance.
// Other named frameworks and certifications that need an attributable source before the chat can say anything.
const FRAMEWORK_CLAIM =
  /\b(?:pci[ -]?dss|fedramp|cyber ?essentials|iso ?27701|iso ?42001|nis2|dora|cmmc|hitrust|stateramp)\b.{0,40}\b(?:compliant|compliance|certified|certification|accredit\w*|attest\w*|adher\w*|aligned|ready|support\w*|meet|meets|have|hold)\b|\b(?:compliant|compliance|certified|certification|adher\w*|aligned|support\w*|meet|meets|have|hold)\b.{0,40}\b(?:pci[ -]?dss|fedramp|cyber ?essentials|iso ?27701|iso ?42001|nis2|dora|cmmc|hitrust|stateramp)\b/;

const PRIVACY_COMPLIANCE =
  /\b(?:gdpr|ccpa|cpra|uk gdpr|lgpd|pipeda|dpdp)\b.{0,40}\b(?:compliant|compliance|certified|certification|adher\w*|aligned|ready|covered|support\w*|meet|meets)\b|\b(?:compliant|compliance|certified|adher\w*|aligned|support\w*|meet|meets)\b.{0,40}\b(?:gdpr|ccpa|cpra|uk gdpr|lgpd|pipeda|dpdp)\b/;

// Free trials and pilots: the site offers a scheduled demo, not a self-serve trial.
const TRIAL = [/\b(?:free )?trials?\b|\bpilot\b|\bproof of concept\b|\bpoc\b|\bsandbox\b|\btry (?:it|zoikoshield|the product|before (?:i|we) buy)\b/];

// Where data lives. The site publishes no residency commitment: region is confirmed per contract.
const DATA_RESIDENCY = [
  /\bdata (?:residency|sovereignty|localisation|localization|location|centre|center)s?\b|\b(?:residency|sovereignty)\b/,
  /\bwhere (?:is|are|will|would|does|do) (?:my|our|the|customer) (?:data|logs?|telemetry|evidence)\b.{0,20}\b(?:stored|hosted|located|kept|processed|reside)\b/,
  /\b(?:keep|stay|remain|store[ds]?|host(?:ed)?|located|processed|reside)\b.{0,30}\b(?:in|within|inside|to)(?: the)? (?:eu|europe|european union|uk|united kingdom|us|usa|united states|india|canada|australia|germany|apac|region|country)\b/,
  /\b(?:eu|europe|uk|us|india|canada|australia|germany|apac)\b.{0,25}\b(?:data (?:centre|center|region|hosting)|hosting|region)\b/,
];

// Named third-party tools. The chat can't confirm integration support for them: the integration
// catalog is the source of truth, and connector sources are gated by assistant_connector_claims.
const VENDORS: [RegExp, string][] = [
  [/\bsplunk\b/, "Splunk"], [/\bcrowd ?strike\b|\bfalcon\b/, "CrowdStrike"], [/\bokta\b/, "Okta"], [/\bservice ?now\b/, "ServiceNow"],
  [/\bjira\b|\batlassian\b/, "Jira"], [/\bslack\b/, "Slack"], [/\bguard ?duty\b/, "AWS GuardDuty"], [/\baws\b|\bamazon web services\b/, "AWS"],
  [/\bgcp\b|\bgoogle cloud\b/, "Google Cloud"], [/\bpalo alto\b|\bcortex\b/, "Palo Alto Networks"], [/\bfortinet\b|\bfortigate\b/, "Fortinet"],
  [/\bsentinel ?one\b/, "SentinelOne"], [/\bq ?radar\b/, "QRadar"], [/\belastic\b|\belk\b/, "Elastic"], [/\bdatadog\b/, "Datadog"],
  [/\bpagerduty\b/, "PagerDuty"], [/\bgithub\b/, "GitHub"], [/\bjamf\b/, "Jamf"], [/\bcarbon black\b/, "Carbon Black"], [/\bcisco\b/, "Cisco"],
  [/\bzscaler\b/, "Zscaler"], [/\bproofpoint\b/, "Proofpoint"], [/\btenable\b|\bnessus\b/, "Tenable"], [/\bqualys\b/, "Qualys"],
  [/\brapid7\b/, "Rapid7"], [/\bsumo ?logic\b/, "Sumo Logic"], [/\bchronicle\b/, "Chronicle"], [/\bazure ad\b/, "Azure AD"],
];
const INTEGRATION_VERB = /\b(?:integrat\w*|connect\w*|support\w*|work(?:s)? with|compatib\w*|plug\w*|ingest\w*|supports?)\b/;
const INTEGRATION_GENERIC = [
  /\b(?:which|what) (?:integrations?|connectors?|tools|systems|products|vendors|platforms|technolog\w+) (?:do(?:es)? )?(?:you|zoikoshield|it|the platform)?\s?(?:support|integrate|connect|work)\w*/,
  /\b(?:list|show|tell me) (?:of |me )?(?:all )?(?:the |your |supported )?(?:integrations?|connectors?)\b/,
  /\b(?:what|which) integrations\b/,
  // Tool categories ("do you integrate with SIEM?") are as unconfirmable from chat as a named vendor.
  /\b(?:integrat\w*|connect\w*|support\w*|work(?:s)? with|compatib\w*|ingest\w*)\b.{0,30}\b(?:siem|edr|xdr|soar|idp|identity providers?|cloud providers?|ticketing|itsm|firewalls?)s?\b/,
];

const WRITE: [RegExp, "demo" | "support" | "quote"][] = [
  [/\b(?:book|schedule|request|get|arrange|set up|see) (?:a |an )?(?:live |product |personal )?demo\b/, "demo"],
  [/\b(?:talk|speak|chat) (?:to|with) (?:sales|a sales|your sales)\b/, "demo"],
  // Callback requests: "call me on …", "someone contact me about pricing".
  [/\b(?:contact|call|phone|ring|email|reach|ping) (?:me|us)\b.{0,60}\b(?:pric\w+|quote|cost|sales|plans?|buy\w*|purchas\w+)\b|\b(?:pric\w+|quote|cost|sales|plans?)\b.{0,60}\b(?:contact|call|phone|ring|email) (?:me|us)\b/, "quote"],
  [/\b(?:call|phone|ring|contact|email|reach|get back to) (?:me|us)\b/, "support"],
  // Something of theirs is broken: that is a support case, not a product question.
  [/\b(?:my|our)\b.{0,40}\b(?:failing|failed|broken|not working|stopped working|crash\w*|erroring|stuck|won't (?:load|work|sync|connect|start))\b|\b(?:sync|integration|connector|dashboard|login|sign-?in)\b.{0,20}\b(?:is|are|keeps?|has|isn't|won't|not)\b.{0,12}\b(?:failing|failed|broken|working|crash\w*|erroring|stuck)\b/, "support"],
  // Someone offering contact details: chat keeps none, the support intake does (with consent).
  [/\b(?:remember|save|note|keep|store|take) (?:down )?(?:it|this|that|my (?:email|e-mail|number|phone|details|contact(?: details)?|name))\b/, "support"],
  // Billing problems go to support; billing terms are a different intent.
  [/\b(?:billing|invoices?|payments?|charged|overcharged)\b.{0,30}\b(?:issues?|problems?|errors?|disputes?|wrong|incorrect|mistakes?|failed|not working)\b|\b(?:issues?|problems?|questions?|errors?|disputes?)\b.{0,20}\b(?:with|about|regarding|on) (?:my |our |the )?(?:billing|invoices?|payments?|charges?)\b/, "support"],
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
  if (!COOKIE_CHOICE.test(n) && PRIVACY.some((re) => re.test(n))) return { kind: "privacy" };
  if (ASSISTANT_PRIVACY.some((re) => re.test(n))) return { kind: "assistant_privacy" };
  const write = WRITE.find(([re]) => re.test(n));
  if (write) return { kind: "write", journey: write[1] };
  if (COMMERCIAL_TERMS.some((re) => re.test(n))) return { kind: "commercial_terms" };
  if (REFUND.some((re) => re.test(n))) return { kind: "commercial_terms", topic: "refund" };
  if (BILLING_TERMS.some((re) => re.test(n))) return { kind: "commercial_terms", topic: "billing_terms" };
  if (TRIAL.some((re) => re.test(n))) return { kind: "commercial_terms", topic: "trial" };
  if (PLAN_NAMES.some((re) => re.test(n))) return { kind: "commercial_terms", topic: "plan_names" };
  const regime = n.match(PRIVACY_COMPLIANCE) && n.match(/\b(gdpr|ccpa|cpra|uk gdpr|lgpd|pipeda|dpdp)\b/)?.[1];
  if (regime) return { kind: "privacy_compliance", regime: regime.toUpperCase(), privacy: true };
  const framework = FRAMEWORK_CLAIM.test(n) && n.match(/\b(pci[ -]?dss|fedramp|cyber ?essentials|iso ?27701|iso ?42001|nis2|dora|cmmc|hitrust|stateramp)\b/)?.[1];
  if (framework) return { kind: "privacy_compliance", regime: framework.toUpperCase().replace(/PCI[ -]?DSS/, "PCI DSS"), privacy: false };
  if (DATA_RESIDENCY.some((re) => re.test(n))) return { kind: "data_residency" };
  const vendors = VENDORS.filter(([re]) => re.test(n)).map(([, name]) => name);
  const microsoft = /\b(?:microsoft|sentinel|defender|entra|intune|purview|azure|office 365|m365)\b/.test(n);
  if ((vendors.length && INTEGRATION_VERB.test(n)) || INTEGRATION_GENERIC.some((re) => re.test(n))) {
    return { kind: "integration", vendors: [...new Set(vendors)], microsoft };
  }
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
