import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mycure.md";
  // Use fixed date to prevent unnecessary re-crawling on each build
  const lastUpdate = new Date("2025-01-02");

  return [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/clinics`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporate`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skin`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diagnostics`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobile-labs`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/telehealth`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: lastUpdate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/syncbase-technology`,
      lastModified: lastUpdate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: lastUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
