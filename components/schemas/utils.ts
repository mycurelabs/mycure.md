import type { HeroConfig, VideoShowcaseConfig } from "@/components/types/product-page"

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

/**
 * Compose ServiceSchema + VideoObjectSchema inputs from a PRODUCT page's
 * heroConfig + videoShowcaseConfig. Centralizes:
 *   - YouTube video ID extraction from the embed URL (strips any trailing
 *     query string so a future config edit adding `?si=...` or `?rel=0`
 *     does not silently corrupt the schema)
 *   - Service name composition from heroConfig.headline {prefix, highlight,
 *     suffix} (filters empty strings so pages like /telehealth with empty
 *     suffix do not emit a trailing space)
 *
 * NOTE: Product page only. The homepage heroConfig has a different shape
 * (headline.line1 / line2) and uses heroConfig.video.videoId directly —
 * this helper would fail type-check there.
 */
export function getServiceMeta(
  heroConfig: HeroConfig,
  videoShowcaseConfig: VideoShowcaseConfig
): { videoId: string; serviceName: string } {
  const videoId =
    videoShowcaseConfig.video.src.split("/").pop()?.split("?")[0] ?? ""
  const serviceName = [
    heroConfig.headline.prefix,
    heroConfig.headline.highlight,
    heroConfig.headline.suffix,
  ]
    .filter(Boolean)
    .join(" ")
  return { videoId, serviceName }
}
