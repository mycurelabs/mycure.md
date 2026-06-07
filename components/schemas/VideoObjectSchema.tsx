import { jsonLdString } from "./utils"

interface VideoObjectSchemaProps {
  videoId: string
  name: string
  description?: string
}

export function VideoObjectSchema({ videoId, name, description }: VideoObjectSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    publisher: {
      "@type": "Organization",
      name: "MYCURE",
      url: "https://mycure.md",
      logo: "https://mycure.md/mycure-logo.svg",
    },
  }
  if (description) schema.description = description
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
    />
  )
}
