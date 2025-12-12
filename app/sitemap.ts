import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mycure.md";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/clinics`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospital`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporate`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dental`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skin`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diagnostics`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobile-labs`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/telehealth`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date("2024-12-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
