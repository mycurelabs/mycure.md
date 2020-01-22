// import { getCountries } from './axios';
// import _ from 'lodash';

// From MYCURE API
// export default async () => {
//   const promises = [
//     getCountries({ limit: 100, skip: 0 }),
//     getCountries({ limit: 100, skip: 100 }),
//     getCountries({ limit: 100, skip: 200 }),
//   ];
//   const countries = await Promise.all(promises);
//   const joined = [...countries[0], ...countries[1], ...countries[2]];
//   const mapped = joined.map(c => {
//     return {
//       ...c,

//     }
//   })
//   return joined;
// }