import sdk from '@mycure/sdk-js';
import { getCountry } from '~/utils/axios';

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
  console.warn('country', country);
  const currency = country?.country_code === 'PH' ? 'php' : 'usd';
  console.warn(currency);
  const { items } = await sdk.service('subscription/packages').find({
    organizationType: 'facility',
    organizationTypes: { $in: types },
    $or: [
      { currency },
    ],
  });
  return items;
};

export const getSubscriptionPackagesPricing = async (type) => {
  const packages = await getSubscriptionPackages({ types: [type] });
  const plans = packages.filter(pack => pack.planInterval === 'month');

  console.warn('packages', plans);

  const mappedPackages = plans.map((pack) => {
    const packageValue = pack.tags[0];
    const currency = PACKAGE_CURRENCY[pack.currency];

    const inclusions = mapPackageInclusions(pack, type);
    return {
      value: packageValue,
      facilityType: type,
      title: pack.name,
      description: pack.description,
      image: PACKAGE_IMAGE[packageValue],
      currency,
      // Temp hack
      monthlyPrice: packageValue === 'premium' && type === 'doctor'
        ? 488
        : pack.plan?.amount || 0,
      // Temp hack
      annualMonthlyPrice: packageValue === 'premium' && type === 'doctor'
        ? 399
        : packages.find(item => item.tags.includes(packageValue) && item.planInterval === 'year')
          ?.plan?.amount || 0,
      inclusions,
      // btnText: !pack.plan?.amount ? 'Try Free' : 'Get Started',
      btnText: 'Get Started',
      // Doctor specific only
      ...DOCTOR_TYPES.includes(type) && { users: packageValue === 'lite' ? '1' : 'per' },
    };
  });

  const ENTERPRISE = {
    facilityType: type,
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
      { text: 'White-labeled Patient Portal', valid: true },
      { text: 'API Integration', valid: true },
      { text: 'Multi-branch Functions', valid: true },
      { text: 'Customizable Features', valid: true },
    ],
    btnText: 'Contact Us',
  };

  return !DOCTOR_TYPES.includes(type) ? [...mappedPackages, ENTERPRISE] : mappedPackages;
};

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
    inclusions.push({
      text: 'Unlimited Patients',
      valid: true,
    });
  }

  // Storage
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

  // Classic Booking website
  inclusions.push({
    text: `${organizationType === 'doctor' ? 'Professional' : 'Classic Booking'} Website`,
    valid: classicWebsite.base,
  });

  // Patient Portal Online Results
  if (!DOCTOR_TYPES.includes(organizationType)) {
    inclusions.push({
      text: 'Patient Portal Online Results',
      valid: true,
    });
  }

  // Core Features
  inclusions.push({
    text: 'Core Features',
    valid: true,
  });

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

const PACKAGE_IMAGE = {
  lite: 'Essentials',
  premium: 'Premium',
  platinum: 'Platinum',
  enterprise: 'Enterprise',
};

const PACKAGE_CURRENCY = {
  php: '₱',
  usd: '$',
};

const DOCTOR_TYPES = [
  'doctor',
  'doctor-skin',
  'doctor-pedia',
  'doctor-ob',
  'doctor-telehealth',
];
