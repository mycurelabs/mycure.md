import sdk from '@mycure/sdk-js';
import { getCountry } from '~/utils/axios';

const mapPackageInclusions = (plan, organizationType) => {
  const {
    memberSeatsMax,
    storageMax,
    teleconsultsMax,
    classicWebsite,
    syncbase,
    inventory,
    lis,
    ris,
    pme,
    pharmacy,
    dental,
    prm,
  } = plan.products;

  const packageValue = plan.tags[0];
  const currency = PACKAGE_CURRENCY[plan.currency];
  const inclusions = [];

  // Users
  if (!DOCTOR_TYPES.includes(organizationType)) {
    inclusions.push({
      text: `${memberSeatsMax.base > 1 ? 'Up to ' : ''}${memberSeatsMax.base} user${memberSeatsMax.base > 1 ? 's' : ''}`,
      valid: true,
    });
  } else {
    // UI replacement
    inclusions.push({
      text: 'Unlimited Patients',
      valid: true,
    });
  }

  // Storage
  // - Storage base is GB based.
  const storageValue = storageMax.base < 1 ? `${storageMax.base * 1000} MB Storage` : `${storageMax.base} GB Storage`;
  inclusions.push({
    text: storageValue,
    valid: true,
  });

  // Teleconsult Fee
  if (teleconsultsMax) {
    inclusions.push({
      text: `${currency} ${teleconsultsMax.plan.amount} Fee per Teleconsult`,
      valid: true,
    });
  }

  // Core Features
  inclusions.push({
    text: 'Core Features',
    valid: true,
  });

  // Classic Booking website
  inclusions.push({
    text: `${organizationType === 'doctor' ? 'Professional' : 'Classic Booking'} Website`,
    valid: classicWebsite.base,
  });

  // Patient Portal Online Results
  if (!DOCTOR_TYPES.includes(organizationType)) {
    inclusions.push({
      text: 'Online Results',
      valid: true,
    });
  }

  // Doctor specific only
  if (DOCTOR_TYPES.includes(organizationType)) {
    // Premium Features
    inclusions.push({
      text: 'Premium Features',
      valid: packageValue !== 'lite',
    });
    // Cross Clinic search
    inclusions.push({
      text: 'Cross-clinic search',
      valid: packageValue !== 'lite',
    });
    inclusions.push({
      text: 'Add-on Purchases',
      valid: packageValue !== 'lite',
    });
    return inclusions;
  }

  // Non-doctor items
  
  // Works Offline
  inclusions.push({
    text: 'Works Offline',
    valid: syncbase?.base,
  });

  // Materials Management
  inclusions.push({
    text: 'Materials Management',
    valid: inventory?.base,
  });

  // LIS
  inclusions.push({
    text: 'Laboratory',
    valid: lis?.base,
  });

  // RIS
  inclusions.push({
    text: 'Imaging',
    valid: ris?.base,
  });

  // PME
  inclusions.push({
    text: 'Physical Medical Exam',
    valid: pme?.base,
  });

  // Pharmacy
  if (organizationType === 'clinic') {
    inclusions.push({
      text: 'Pharmacy',
      valid: pharmacy?.base,
    });
  }

  // Dental
  if (dental) {
    inclusions.push({
      text: 'Dental',
      valid: dental.base,
    });
  }

  // PRM
  inclusions.push({
    text: 'PRM',
    valid: prm?.base,
  });

  // Diagnostic Specific only
  if (organizationType === 'diagnostic') {
    inclusions.push({
      text: 'Mobile Labs',
      valid: packageValue === 'platinum',
    });
  }

  return inclusions;
};

const getMonthlyPrice = (pack, organizationType) => {
  if (!pack) return 0;
  return pack.plan?.amount || 0;
};

const getAnnualMonthlyPrice = (pack, organizationType) => {
  if (!pack) return 0;
  // return Math.ceil((pack.plan?.amount || 0) / 12);
  return pack.plan?.amount || 0;
};

const isRecommended = (type, packageValue) => {
  if (DOCTOR_TYPES.includes(type)) return false;
  if (type === 'diagnostic' && packageValue === 'premium') return true;
  if (type === 'clinic' && packageValue === 'premium') return true;
  return false;
};

const getPackageImage = (type, packageValue, isBooking = false) => {
  if (isBooking) return PACKAGE_IMAGE[type];
  return `${PACKAGE_IMAGE[packageValue]}${isRecommended(type, packageValue) ? '-White' : ''}`;
};

const PACKAGE_IMAGE = {
  lite: 'Essentials',
  premium: 'Premium',
  platinum: 'Platinum',
  enterprise: 'Enterprise Blue',
  // - BOOKING EXCLUSIVE
  doctor: 'MYCURE-Pricing-Doctor',
  clinic: 'MYCURE-Pricing-Outpatient',
  diagnostic: 'MYCURE-Pricing-Diagnostics',
};

const PACKAGE_CURRENCY = {
  php: 'PHP',
  usd: 'USD',
};

export const DOCTOR_TYPES = [
  'doctor',
  'doctor-skin',
  'doctor-pedia',
  'doctor-ob',
  'doctor-telehealth',
];

// const generatePackageIds = (type, tiers, currencies = ['usd', 'php'], intervals = ['month', 'year']) => {
//   const ids = [`package_${type}_lite`];
//   tiers?.forEach(tier => {
//     for (let cI = 0; cI < currencies.length; cI++) {
//       for (let iI = 0; iI < intervals.length; iI++) {
//         ids.push(`package_${type}_${tier}_${currencies[cI]}_${intervals[iI]}ly`); // eslint_disable_line
//       }
//     }
//   });
//   return ids;
// };

// const BOOKING_PACKAGE_IDS = [
//   'package_booking_free',
// ];
// const DOCTOR_PACKAGE_IDS = generatePackageIds('physicians', ['premium']);
// const CLINIC_PACKAGE_IDS = generatePackageIds('outpatients', ['premium', 'platinum', 'enterprise']);
// const DIAGNOSTIC_PACKAGE_IDS = generatePackageIds('diagnostics', ['premium', 'platinum', 'enterprise']);

export const state = () => ({
  subscriptionPackages: [],
});

export const getSubscriptionPackages = async ({ types }) => {
  const country = await getCountry();
  const currency = country?.country_code === 'PH' ? 'php' : 'usd';
  const { items } = await sdk.service('subscription/packages').find({
    organizationType: 'facility',
    organizationTypes: { $in: types },
    $or: [
      { currency },
    ],
    ...country.country_code === 'US' && { tags: { $in: ['us'] } },
    ...country.country_code !== 'US' && { tags: { $nin: ['us'] } },
  });
  return items;
};

/**
 * See https://github.com/mycurelabs/olympus/wiki/Health-Facility-Types-Guide
 * @param {String} type - organization types
 * @example 'doctor' - for doctor and telehealth
 * @example 'clinic'  - for outpatient clinic
 * @example 'diagnostic' - for diagnostic
 *
 * @returns {Array} packages
 */
export const getSubscriptionPackagesPricing = async (type, { isBooking = false } = {}) => {
  // This is all the packages: both month and year
  const packages = await getSubscriptionPackages({ types: [type] });
  // This is just the monthly packages
  const plans = packages.filter(pack => pack.planInterval === 'month') || [];

  if (!plans.length) return [];

  const mappedPackages = plans.map((pack) => {
    const packageValue = pack.tags[0];
    const currency = PACKAGE_CURRENCY[pack.currency];
    const inclusions = mapPackageInclusions(pack, type);
    const monthlyPackage = packages.find(pkg => pkg.tags[0] === packageValue && pkg.planInterval === 'month');
    const annualPackage = packages.find(pkg => pkg.tags[0] === packageValue && pkg.planInterval === 'year');
    return {
      monthlyPackageId: monthlyPackage?.id,
      annualPackageId: annualPackage?.id,
      value: packageValue,
      facilityType: type,
      title: `${packageValue.charAt(0).toUpperCase()}${packageValue.slice(1)}`,
      description: pack.description,
      image: getPackageImage(type, packageValue, isBooking),
      isRecommended: isRecommended(type, packageValue),
      currency,
      monthlyPrice: getMonthlyPrice(pack, type),
      annualMonthlyPrice: getAnnualMonthlyPrice(packages.find(item => item.tags.includes(packageValue) && item.planInterval === 'year'), type),
      inclusions,
      btnText: 'Get Started',
      // Trial days
      ...monthlyPackage?.trialDays && { monthlyTrial: monthlyPackage.trialDays },
      ...annualPackage?.trialDays && { annualTrial: annualPackage.trialDays },
      // Doctor specific only
      ...DOCTOR_TYPES.includes(type) && { users: packageValue === 'lite' ? 1 : '/' },
      // Sign-up query (except Doctor)
    };
  });

  const ENTERPRISE = {
    facilityType: 'clinic',
    value: 'enterprise',
    title: 'Enterprise',
    description: 'Perfect for multi-branch healthcare facilities doing large-scale operations',
    image: 'Enterprise',
    requireContact: true,
    inclusions: [
      { text: 'Unlimited Users', valid: true },
      { text: 'Flexible Storage', valid: true },
      { text: 'Dedicated Support', valid: true },
      { text: 'Dedicated Project Timeline', valid: true },
      { text: 'White-labeled Patient App', valid: true },
      { text: 'API Integration', valid: true },
      { text: 'Multi-branch Functions', valid: true },
      { text: 'Customizable Features', valid: true },
    ],
    btnText: 'Chat With Us',
  };

  return !DOCTOR_TYPES.includes(type) ? [...mappedPackages, ENTERPRISE] : mappedPackages;
};
