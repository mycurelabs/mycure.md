import sdk from '@mycure/sdk-js';
import { getCountry } from '~/utils/axios';

const generatePackageIds = (type, tiers, currencies = ['usd', 'php'], intervals = ['month', 'year']) => {
  const ids = [`package_${type}_lite`];
  tiers?.forEach(tier => {
    for (let cI = 0; cI < currencies.length; cI++) {
      for (let iI = 0; iI < intervals.length; iI++) {
        ids.push(`package_${type}_${tier}_${currencies[cI]}_${intervals[iI]}ly`);
      }
    }
  });
  return ids;
};

const BOOKING_PACKAGE_IDS = [
  'package_booking_free',
];
const DOCTOR_PACKAGE_IDS = generatePackageIds('physicians', ['premium']);
const CLINIC_PACKAGE_IDS = generatePackageIds('outpatients', ['premium', 'platinum', 'enterprise']);
const DIAGNOSTIC_PACKAGE_IDS = generatePackageIds('diagnostics', ['premium', 'platinum', 'enterprise']);

export const state = () => ({
  subscriptionPackages: [],
});

export const getSubscriptionPackages = async ({ types }) => {
  const country = await getCountry();
  console.warn(country);
  const { items } = await sdk.service('subscription/packages').find({ organizationType: 'facility', organizationTypes: types });
  // if (!items.length) {
  //   return {

  //   }
  // }
  const doctorPackages = items?.filter(pkg => DOCTOR_PACKAGE_IDS.includes(pkg.id));
  return {
    doctorPackages,
  };
};

