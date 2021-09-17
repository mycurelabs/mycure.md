import { getCountry } from '~/utils/axios';

export default async () => {
  const country = await getCountry() || {};
  console.log(country);
  const code = country.country_code;
  if (!code || code === 'PH') return true;
  return false;
};
