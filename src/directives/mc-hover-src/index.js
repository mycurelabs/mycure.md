import Vue from 'vue';

Vue.directive('mc-hover-src', {
  inserted: (el) => {
    el;
  },
  bind: (el, binding, vnode) => {
    el; vnode;
    const {
      name, value, oldValue, expression, arg, modifiers
    } = binding;
  }
});
