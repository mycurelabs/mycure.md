import Vue from 'vue';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  Vue,
  dsn: 'https://58567a0b813e4a6b8d82f7d81a65546f@o595042.ingest.sentry.io/5748409',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Our config
  environment: process.env.ENV,
});
