import { getIP, getCountry } from '../axios';
import store from '../vuex';

(async () => {
  const { ip } = await getIP();
  const country = await getCountry(ip);
  console.warn(country.country_name);
  store.commit('ui/setVisitorCountry', country);
})();