// Structured error for every non-OK hapihub response. Carries the HTTP status
// and the parsed JSON body so callers can branch on machine-readable codes
// (e.g. the 409 `SLOT_TAKEN` booking conflict) instead of string-matching.
export interface HapihubErrorBody {
  code?: string;
  message?: string;
  errors?: Array<{ suggestions?: Array<{ startTime: string; endTime: string; durationMinutes: number }> }>;
  [key: string]: unknown;
}

export class HapihubError extends Error {
  readonly status: number;
  readonly body: HapihubErrorBody | null;

  constructor(status: number, body: HapihubErrorBody | null) {
    super(body?.message ?? `Hapihub request failed (${status})`);
    this.name = "HapihubError";
    this.status = status;
    this.body = body;
  }

  get code(): string | undefined {
    return this.body?.code;
  }
}
