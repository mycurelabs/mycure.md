import Vue from 'vue';
import responsiveMixins from '~/mixins/responsiveMixins';
import CanUseWebp from '~/utils/can-use-webp.js';

export default (context, inject) => {
  const useWebp = async () => await CanUseWebp();
  inject('useWebp', useWebp);
  if (!Vue.responsiveMixins) {
    Vue.responsiveMixins = true;
    Vue.mixin(responsiveMixins);
  }
};
