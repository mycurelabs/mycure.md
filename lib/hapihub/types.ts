// Narrow TypeScript shapes for the hapihub public booking API. These mirror
// the verified backend contracts (see the team lead brief / apps/pxp reference)
// and stay intentionally lenient (`?`) because the API sanitizes fields per
// profile visibility.

export type ProfileType = "person" | "organization";

export type LocationType = "in-person" | "video" | "phone";

export interface ProfileName {
  prefix?: string;
  firstName?: string;
  lastName?: string;
  suffix?: string;
}

export interface ProfileAddress {
  street1?: string;
  city?: string;
  municipality?: string;
  province?: string;
  country?: string;
  lat?: number;
  lng?: number;
}

export interface PersonProfile {
  name?: ProfileName;
  credentials?: string;
  bio?: string;
  // May be a base64 data URL — render with a plain <img>, not next/image.
  picURL?: string;
  specialties?: string[];
  professions?: string[];
  languages?: string[];
  address?: ProfileAddress;
  phone?: string;
  email?: string;
  website?: string;
}

export interface OrganizationSchedule {
  day: string;
  opening: string;
  closing: string;
}

export interface ServiceOffered {
  name: string;
  description?: string;
  isBookable?: boolean;
}

export interface OrganizationProfile {
  name?: string;
  description?: string;
  tagline?: string;
  types?: string[];
  address?: ProfileAddress;
  phone?: string;
  email?: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  logoURL?: string;
  picURL?: string;
  coverURL?: string;
  schedule?: OrganizationSchedule[];
  servicesOffered?: ServiceOffered[];
}

export interface PublicProfileSeo {
  title?: string;
  description?: string;
  image?: string;
}

export interface PublicProfile {
  id: string;
  type: ProfileType;
  ref: string;
  slug: string;
  status: string;
  version?: number | string;
  person?: PersonProfile;
  organization?: OrganizationProfile;
  seo?: PublicProfileSeo;
  events?: string[];
  publishedAt?: number | string;
}

export interface FormFieldOption {
  label?: string;
  value: string;
}

export interface FormField {
  name: string;
  label?: string;
  type: string; // text | textarea | email | phone | number | date | select | ...
  required?: boolean;
  options?: Array<string | FormFieldOption>;
}

export interface BookingEvent {
  id: string;
  title: string;
  description?: string;
  durationMinutes: number;
  locationTypes: LocationType[];
  timezone?: string;
  billingEnabled?: boolean;
  billingAmount?: number; // minor units (cents)
  billingCurrency?: string;
  owner?: { name?: string; photoUrl?: string };
  // Only present on the full GET /booking/events/{id} projection.
  formConfig?: { fields?: FormField[] };
}

export interface EventSlot {
  id: string;
  event: string;
  startTime: string; // ISO-8601 UTC
  endTime: string; // ISO-8601 UTC
  durationMinutes: number;
  status: "available" | "booked" | "blocked" | string;
  timezone?: string;
  locationTypes?: LocationType[];
}

export interface BookingSuggestion {
  startTime: string;
  endTime: string;
  durationMinutes: number;
}

export interface Booking {
  id: string;
  status: "pending" | "confirmed" | "cancelled" | "rejected" | "completed" | "no_show" | string;
  event?: string | { id: string; title?: string };
  scheduledAt?: string;
  durationMinutes?: number;
  locationType?: LocationType;
  reason?: string;
  [key: string]: unknown;
}

export interface CreateBookingInput {
  event: string;
  scheduledAt: string; // ISO-8601 UTC
  durationMinutes?: number;
  locationType?: LocationType;
  reason?: string;
  formResponses?: { data: Record<string, unknown> };
}

export interface ListResult<T> {
  data?: T[];
  total?: number;
}

export interface AuthUser {
  id: string;
  email?: string;
  name?: string;
  [key: string]: unknown;
}

export interface AuthResult {
  token: string | null;
  user: AuthUser | null;
}
