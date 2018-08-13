import { getIP, getCountry } from '../axios';
import store from '../vuex';

(async () => {
  const { ip } = await getIP();
  console.log(await getCountry(ip))
  const country = await getCountry(ip);
  store.commit('ui/setVisitorCountry', country);
})();