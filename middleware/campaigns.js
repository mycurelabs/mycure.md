export default function ({ app, route }) {
  const campaign = route?.query || {};
  if (!campaign?.utm_source || !campaign?.utm_campaign) return;
  app.$cookies.set('utm-data', campaign);
}
