export default () => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = '77efedac-1e3a-4bca-b12d-2a4ffc754baf';

  (function () {
    const d = document;
    const s = d.createElement('script');

    s.src = 'https://client.crisp.chat/l.js';
    s.async = 1;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();
};
