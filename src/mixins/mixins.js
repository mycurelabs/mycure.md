import Vue from 'vue';
import { Observable } from 'rxjs/Observable';

Vue.mixin({
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
    }
  }
});