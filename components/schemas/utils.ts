/**
 * Escape JSON-LD payload for inline `<script>` injection.
 *
 * Replaces `</` with `<\/` so a value containing `</script>` cannot terminate
 * the surrounding `<script type="application/ld+json">` block early. This is
 * the standard hardening for inline JSON-LD payloads (used by next-seo,
 * schema-dts examples, and Google's own dev guidance).
 *
 * All schema inputs in this codebase come from developer-controlled config
 * today, but this escape ensures the pattern stays safe if a future contributor
 * pipes user input (CMS, review system, etc.) through these components.
 */
export function jsonLdString(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c")
}
