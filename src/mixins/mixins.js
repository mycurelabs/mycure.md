import Vue from 'vue';
import { Observable } from 'rxjs/Observable';
// import { getIP } from '../axios';

Vue.mixin({
  data () {
    return {
      visitorIP: '',
      visitorCountry: ''
    };
  },
  methods: {
    $scrollspy: () => {
      return Observable.create(obs => {
        window.addEventListener('scroll', (e) => {
          obs.next(window.pageYOffset || document.documentElement.scrollTop);
        });
      });
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
    // $getVisitorCountry: async () => {
    //   const { ip } = await getIP();
    //   this.visitorIP = ip;
    // }
  }
});
