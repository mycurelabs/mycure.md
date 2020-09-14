export default () => {
  window.$crisp = [];
<<<<<<< HEAD
  // PREVIOUS ID
  // window.CRISP_WEBSITE_ID = '77efedac-1e3a-4bca-b12d-2a4ffc754baf';
  window.CRISP_WEBSITE_ID = '8ec0faa8-cc7d-4aed-8ffa-e4816dff000b';

=======
  window.CRISP_WEBSITE_ID = process.env.CRISP_WEBSITE_ID;
>>>>>>> cf8d85a0721d2d3171d16df41c1cf297b64c94e3
  (function () {
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://client.crisp.chat/l.js';
    s.async = 1;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();
};
