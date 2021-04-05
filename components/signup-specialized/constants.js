const FREE_INCLUSIONS_TEXT = 'FREE 1 GB storage, 1 doctor seat, 1 staff seat';

export const SPECIALIZED_CLINIC_TYPES = [
  {
    title: 'Skin and Aesthetic',
    value: 'aesthetics-clinic',
    image: 'mycure-signup-derma',
    selected: false,
    checklist: [
      FREE_INCLUSIONS_TEXT,
      'Administration, Registration, and Billing modules',
      'EMR module with image uploads and medical drawings',
      'Pharmacy & Inventory Management Module partnered with Point-of-Sales functions',
    ],
    descriptions: [
      'Dynamic EMR module to accommodate various procedures with image uploads and medical drawings',
      'Administration, Registration, and Billing modules',
      'Pharmacy & Inventory Management Module partnered with Point-of-Sales functions',
      FREE_INCLUSIONS_TEXT,
    ],
  },
  {
    title: 'Pediatrics',
    value: 'pediatrics-clinic',
    image: 'mycure-signup-pedia',
    selected: false,
    checklist: [
      FREE_INCLUSIONS_TEXT,
      'Administration, Registration, and Billing modules',
      'EMR module with growth charts, vaccination tracker, and developmental milestones',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
    ],
    descriptions: [
      'Comprehensive and complete EMR module with growth charts, a vaccination tracker, and developmental milestones',
      'Administration, Registration, and Billing modules',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
      FREE_INCLUSIONS_TEXT,
    ],
  },
  {
    title: 'Maternity Care',
    value: 'maternity-care-clinic',
    image: 'mycure-signup-maternity',
    selected: false,
    checklist: [
      FREE_INCLUSIONS_TEXT,
      'Administration, Registration, EMR, and Billing modules',
      'Laboratory & Imaging modules with AOG & EDD calculators',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
    ],
    descriptions: [
      'Laboratory & Imaging modules to store lab and ultrasound results with AOG & EDD calculators',
      'Administration, Registration, EMR, and Billing modules',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
      FREE_INCLUSIONS_TEXT,
    ],
  },
  {
    title: 'Dental',
    value: 'dental-clinic',
    image: 'mycure-signup-dental',
    selected: false,
    checklist: [
      FREE_INCLUSIONS_TEXT,
      'Administration, Registration, and Billing modules',
      'Dental EMR module with dental charting & documentation',
      'Laboratory & Imaging modules',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
    ],
    descriptions: [
      'A comprehensive Dental EMR module to for baseline dental charting, proposed work documentation, and other attachments',
      'Administration, Registration, and Billing modules',
      'Laboratory & Imaging modules',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
      FREE_INCLUSIONS_TEXT,
    ],
  },
  {
    title: 'Diagnostic',
    value: 'diagnostic-center',
    image: 'mycure-signup-diag',
    selected: false,
    checklist: [
      FREE_INCLUSIONS_TEXT,
      'Administration, Registration, EMR, and Billing modules',
      'Laboratory & Imaging modules with HL7 integrations, send-outs, and specimen tracking',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
    ],
    descriptions: [
      'Interoperable Laboratory & Imaging modules with HL7 machine integrations, send-outs, and specimen tracking functions',
      'Administration, Registration, EMR, and Billing modules',
      'Pharmacy & Inventory Management module with Point-of-Sales functions',
      FREE_INCLUSIONS_TEXT,
    ],
  },
];
