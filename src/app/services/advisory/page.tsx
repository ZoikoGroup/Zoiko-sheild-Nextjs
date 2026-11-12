import { permanentRedirect } from "next/navigation";

// /vciso-advisory is the canonical vCISO & Advisory page. This legacy path
// permanently redirects (308) there so the same content isn't served at two URLs.
export default function ServicesAdvisoryRedirect() {
  permanentRedirect("/vciso-advisory");
}
