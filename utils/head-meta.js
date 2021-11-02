const LANG = 'en_US';
const TYPE = 'website';
const URL = 'https://mycure.md';
const SITE_NAME = 'mycure.md';

export default ({ title, description, keywords, socialBanner }) => {
  return {
    title,
    description,
    meta: [
      // normal meta
      {
        hid: 'keywords',
        name: 'keywords',
        content: keywords,
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'title',
        name: 'title',
        content: title,
      },
      // facebook meta
      {
        hid: 'locale',
        name: 'og:locale',
        content: LANG,
      },
      {
        hid: 'type',
        name: 'og:type',
        content: TYPE,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: URL,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: SITE_NAME,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: socialBanner,
      },
      // twitter meta
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@mycureapp',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@mycureapp',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'MYCURE | Making Healthcare Accessible to All',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'MYCURE is a healthcare platform that connects physicians, clinics, hospitals, and medical organizations to anyone in need.',
      },
      // mobile meta
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: title,
      },
    ],
  };
};
