import Vue from 'vue';

Vue.mixin({
  methods: {
    $scrollspy: (cb) => {
      window.addEventListener('scroll', (e) => {
        cb(window.pageYOffset || document.documentElement.scrollTop);
      });
    },
    $removeScrollspy: () => {
      window.removeEventListener('scroll', (e) => {
        console.log(e);
      });
    }
  }
});