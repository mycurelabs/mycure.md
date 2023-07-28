import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: {
        id: process.env.GA4_ID,
        params: {
          send_page_view: false,
        },
      },
    },
    app.router,
  );
};
