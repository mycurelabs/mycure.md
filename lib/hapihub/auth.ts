// Browser-only Better Auth wrapper for the booking flow.
//
// Mechanism copied from the PXP web client (apps/pxp/lib/auth/client.web.ts):
// hapihub's better-auth backend runs the `bearer()` plugin, which returns a
// rotating session token in the `set-auth-token` response header on
// /auth/sign-in and /auth/sign-up. Cross-origin cookies (sameSite=lax) are not
// reliably sent on later XHRs, so instead of relying on cookies we CAPTURE that
// token, persist it in localStorage, and REPLAY it as `Authorization: Bearer
// <token>` on the booking write. This is the exact pattern PXP uses in
// production on the web.
//
// The token is also present in the JSON body (`data.token`) as a fallback for
// environments where the server does not expose `set-auth-token` via
// Access-Control-Expose-Headers.
import { getHapihubBaseUrl } from "./config";
import { HapihubError, type HapihubErrorBody } from "./error";
import type { AuthResult, AuthUser } from "./types";

const TOKEN_KEY = "mycure.booking.bearer-token";

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

function writeToken(value: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (value) window.localStorage.setItem(TOKEN_KEY, value);
    else window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    // localStorage can throw in private/restricted contexts — the token still
    // lives for this call's duration; persistence is the only thing lost.
  }
}

export function isAuthenticated(): boolean {
  return getAuthToken() != null;
}

export function signOut(): void {
  writeToken(null);
}

async function authFetch(path: string, body: Record<string, unknown>): Promise<AuthResult> {
  const res = await fetch(`${getHapihubBaseUrl()}/auth${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });

  const text = await res.text();
  let data: { token?: string; user?: AuthUser; message?: string; code?: string } | null = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new HapihubError(res.status, (data ?? null) as HapihubErrorBody | null);
  }

  const token = res.headers.get("set-auth-token") || data?.token || null;
  if (token) writeToken(token);
  return { token, user: data?.user ?? null };
}

/** POST /auth/sign-in/email */
export function signIn(email: string, password: string): Promise<AuthResult> {
  return authFetch("/sign-in/email", { email, password });
}

/** POST /auth/sign-up/email */
export function signUp(name: string, email: string, password: string): Promise<AuthResult> {
  return authFetch("/sign-up/email", { name, email, password });
}
