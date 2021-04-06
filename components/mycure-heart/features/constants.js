export default () => {
  const CONTENT = {
    title: 'Collect and organize health data. Produce useful reports. Make informed decisions.',
    description: 'MYCURE Heart is not just an EMR. It comes with a combination of complementary modules for daily health record management of your stakeholders.',
    image: 'mycure-heart-diagram',
  };

  const SLIDES = [
    'mycure-heart-diagram-mobile-01-registration',
    'mycure-heart-diagram-mobile-02-syncbase',
    'mycure-heart-diagram-mobile-03-lab',
    'mycure-heart-diagram-mobile-04-pharmacy',
    'mycure-heart-diagram-mobile-05-materials-management',
  ];

  const SOLUTIONS = [
    {
      title: 'Registration',
      description: 'Patient-profiling, queuing, and appointments',
      icon: 'mycure-web-clinic-feature-icon-core-registration',
      customPath: 'module-icons/',
    },
    {
      title: 'Medical Records',
      description: 'Create printable prescriptions, charts, lab orders, and customizable forms.',
      icon: 'mycure-web-clinic-feature-icon-core-emr',
      customPath: 'module-icons/',
    },
    {
      title: 'Laboratory & Imaging',
      description: 'Online & printable results census, HL7, & DICOM/PACS integration',
      icon: 'mycure-web-clinic-feature-icon-premium-laboratory',
      customPath: 'module-icons/',
    },
    {
      title: 'Pharmacy',
      description: 'Point-of-sales functions, eRx access, stock control and reports',
      icon: 'mycure-web-clinic-feature-icon-premium-pharmacy',
      customPath: 'module-icons/',
    },
    {
      title: 'Administration',
      description: 'Staff management, audit trail, and clinic customizations',
      icon: 'mycure-web-clinic-feature-icon-core-administrative',
      customPath: 'module-icons/',
    },
    {
      title: 'Materials Management',
      description: 'Items masterlist, reorder, & expiration alerts, and weekly reports',
      icon: 'mycure-web-clinic-feature-icon-premium-materials-management',
      customPath: 'module-icons/',
    },
  ];
  return { CONTENT, SLIDES, SOLUTIONS };
};
