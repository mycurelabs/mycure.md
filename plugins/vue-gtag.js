import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';

const router = new VueRouter({
  routes: [
    { name: 'Home', path: '/' },
    { name: 'Doctors Clinics', path: '/doctors-clinics' },
    { name: 'Outpatient Clinics', path: '/clinics' },
    { name: 'Diagnostic Centers', path: '/diagnostics' },
    { name: 'Telehealth', path: '/telehealth' },
    { name: 'Booking', path: '/booking' },
    { name: 'Signup', path: '/signup/health-facilities' },
  ],
});

Vue.use(VueGtag, {
  config: {
    id: process.env.GA_ID,
    params: {
      send_page_view: false,
    },
  },
}, router);
