import { MetadataRoute } from "next";

import { listPublishedProfiles } from "@/lib/hapihub/client";

const baseUrl = "https://mycure.md";

function staticRoutes(lastUpdate: Date): MetadataRoute.Sitemap {
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
    {
      url: `${baseUrl}/security-overview`,
      lastModified: lastUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/subprocessors`,
      lastModified: lastUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastUpdate = new Date();
  const routes = staticRoutes(lastUpdate);

  // Append published public-profile pages. `listPublishedProfiles` never
  // throws (it swallows API/network errors and returns []), so a hapihub
  // outage degrades to the static list rather than failing the build. Wrapped
  // in try/catch too for belt-and-suspenders safety.
  try {
    const [people, organizations] = await Promise.all([
      listPublishedProfiles("person"),
      listPublishedProfiles("organization"),
    ]);

    for (const profile of people) {
      if (!profile.slug) continue;
      routes.push({
        url: `${baseUrl}/d/${profile.slug}`,
        lastModified: lastUpdate,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
    for (const profile of organizations) {
      if (!profile.slug) continue;
      routes.push({
        url: `${baseUrl}/c/${profile.slug}`,
        lastModified: lastUpdate,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  } catch {
    // Fall back to static routes only.
  }

  return routes;
}
