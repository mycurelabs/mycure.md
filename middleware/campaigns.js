export default function ({ app, route }) {
  const campaign = route?.query || {};
  // console.warn('🚀 ~ file: campaigns.js ~ line 3 ~ campaign', campaign);
  if (!campaign?.utm_source || !campaign?.utm_campaign) return;
  app.$cookies.set('utm-data', campaign);
}
