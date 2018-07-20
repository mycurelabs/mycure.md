import Vue from 'vue';
import { Observable } from 'rxjs/Observable';

Vue.mixin({
  computed: {
    $isMobile () {
      return this.wXS || wSM;
    }
  },  
  methods: {
    $scrollspy: () => {
      return Observable.create(obs => {
        window.addEventListener('scroll', (e) => {
          obs.next(window.pageYOffset || document.documentElement.scrollTop);
        });
      })
    },
    $removeScrollspy: () => {
      window.removeEventListener('scroll', (e) => {
        console.log(e);
      });
    },
    $addClass: (id, _class) => {
      const e = document.getElementById(id);
      e.classList.add(_class);
    },
    $removeClass: (id, _class) => {
      const e = document.getElementById(id);
      e.classList.remove(_class);
    },
    $isProduction: () => process.env.NODE_ENV === 'production'
  }
});