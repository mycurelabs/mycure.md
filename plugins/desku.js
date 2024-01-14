// import Vue from 'vue';

export default (context, inject) => {
  (function () {
    window.onload = () => {
      window.lc_id = '950864731158';
      window.lc_dc = 'mycurehealth';
      const chatWidget = document.createElement('app-chat-box');
      chatWidget.setAttribute('id', 'widget');
      document.body.insertAdjacentElement('beforeend', chatWidget);
      const deskuInstall = document.createElement('script');
      deskuInstall.src = 'https://widget.desku.io/chat-widget.js';
      deskuInstall.setAttribute('defer', true);
      document.body.insertAdjacentElement('beforeend', deskuInstall);
    };
  })();
};
