import CanUseWebp from '~/utils/can-use-webp.js';

export default (context, inject) => {
  const useWebp = async () => await CanUseWebp();
  inject('useWebp', useWebp);
  context.$useWebp = useWebp;
};
