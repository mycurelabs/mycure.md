const FREE_INCLUSIONS = [
  '1 doctor account',
  '1 staff account',
  '1 GB Storage'
];

export const SPECIALIZED_CLINIC_TYPES = [
  {
    title: 'Skin and Aesthetic',
    value: 'aesthetics-clinic',
    image: 'mycure-signup-derma',
    selected: false,
    checklist: [
      ...FREE_INCLUSIONS,
      'Core Modules',
      'Pharmacy',
      'Materials Management',
    ],
  },
  {
    title: 'Pediatrics',
    value: 'pediatrics-clinic',
    image: 'mycure-signup-pedia',
    selected: false,
    checklist: [
      ...FREE_INCLUSIONS,
      'Core Modules',
      'Pharmacy',
      'Materials Management',
    ]
  },
  {
    title: 'Maternity Care',
    value: 'maternity-care-clinic',
    image: 'mycure-signup-maternity',
    selected: false,
    checklist: [
      ...FREE_INCLUSIONS,
      'Core Modules',
      'Laboratory',
      'Imaging',
      'Pharmacy',
      'Materials Management'
    ]
  },
  {
    title: 'Dental',
    value: 'dental-clinic',
    image: 'mycure-signup-dental',
    selected: false,
    checklist: [
      ...FREE_INCLUSIONS,
      'Core Modules',
      'Laboratory',
      'Imaging',
      'Pharmacy',
      'Materials Management'
    ]
  },
  {
    title: 'Diagnostic',
    value: 'diagnostic-center',
    image: 'mycure-signup-diag',
    selected: false,
    checklist: [
      ...FREE_INCLUSIONS,
      'Core Modules',
      'Laboratory',
      'Imaging',
      'Pharmacy',
      'Materials Management'
    ]
  }
];
