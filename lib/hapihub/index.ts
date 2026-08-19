// hapihub public API client — barrel export.
export * from "./types";
export { HapihubError, type HapihubErrorBody } from "./error";
export { getHapihubBaseUrl } from "./config";
export {
  getProfileBySlug,
  getProfileEvents,
  getEvent,
  getEventSlots,
  listPublishedProfiles,
} from "./client";
export { signIn, signUp, signOut, getAuthToken, isAuthenticated } from "./auth";
export { createBooking } from "./booking";
