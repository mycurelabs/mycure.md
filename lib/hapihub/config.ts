// Base URL for the hapihub public API.
//
// `NEXT_PUBLIC_HAPIHUB_URL` is inlined at build time (client bundle) and also
// readable at runtime on the server, so the same resolver works from RSC and
// from client components. Defaults to the production public API; point it at
// staging (https://hapihub.stg.localfirsthealth.com) or a local hapihub
// (http://localhost:7500) via the env var. See `.env.example`.
//
// Hapihub serves service routes at ROOT — there is NO `/api` prefix.
export function getHapihubBaseUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_HAPIHUB_URL || "https://hapihub.localfirsthealth.com";
  return url.replace(/\/$/, "");
}
