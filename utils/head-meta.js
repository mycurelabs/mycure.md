const LANG = 'en_US';
const TYPE = 'website';
const URL = 'https://mycure.md';
const SITE_NAME = 'mycure.md';

export default ({ title, description, socialBanner }) => {
  return {
    title,
    description,
    meta: [
      // normal meta
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
      // mobile meta
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: title,
      },
    ],
  };
};
