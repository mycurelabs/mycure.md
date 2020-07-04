export const FILTER_ITEMS = [
  {
    tag: 'default',
    info: 'Choose type',
  },
  {
    tag: 'family',
    info: 'For my family',
  },
  {
    tag: 'elderly',
    info: 'For the elderly',
  },
  {
    tag: 'kids',
    info: 'For my kids',
  },
  {
    tag: 'eyes',
    info: 'For my eyes',
  },
  {
    tag: 'nose',
    info: 'For my nose',
  },
];

export const SORT_ITEMS = [
  {
    tag: 'default',
    info: 'Choose type',
  },
  {
    tag: 'alu',
    info: 'Alphabetical Order',
  },
  {
    tag: 'ald',
    info: 'Alphabetical Reverse',
  },
  {
    tag: 'spc',
    info: 'Specialization',
  },
  {
    tag: 'exp',
    info: 'Years of Experience',
  },
];

export const SERVICES_LIST = [
  'Obstetrics and Gynecology',
  'Pediatrics and Neonatology',
  'Internal Medicine',
  'Cardiology',
  'Pulmonology',
  'General Surgery',
  'Pathology, Radiology, and Sonology',
  'Endocrinology',
  'Gastroenterology',
];

export const SCHEDULES_LIST = [
  {
    day: 'Mon - Sat',
    time: '04:00 PM - 09:00 PM',
  },
  {
    day: 'Sun',
    time: '09:00 PM - 12:00 PM',
  },
];

export const RATES = {
  currency: '₱',
  min: '500',
  max: '1,000',
};

export const DOCTORS_LIST = [
  {
    fullName: 'Jean Rivera',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Pediatrician',
    specializationTags: ['kids', 'family', 'nose', 'elderly'],
    experience: 25,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Christ Hilpert',
    title: 'MD',
    imageFile: 'doctor-website-profile-male.png',
    specialization: 'Pulmonology',
    specializationTags: ['kids', 'nose'],
    experience: 3,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Adrienne Gleichner',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Internist',
    specializationTags: ['family', 'nose'],
    experience: 5,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Norberto Jones',
    title: 'MD',
    imageFile: 'doctor-website-profile-male.png',
    specialization: 'Pediatrician',
    specializationTags: ['eyes', 'nose'],
    experience: 25,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Jeanne Escobar',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Pediatrician',
    specializationTags: ['kids', 'family', 'elderly'],
    experience: 25,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Vicente Reinger',
    title: 'MD',
    imageFile: 'doctor-website-profile-male.png',
    specialization: 'Pulmonology',
    specializationTags: ['family', 'nose', 'elderly'],
    experience: 3,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Angela Mosciski',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Internist',
    specializationTags: ['family'],
    experience: 5,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Cathy Ledner',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Pediatrician',
    specializationTags: ['kids'],
    experience: 25,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Fisher Bergstrom',
    title: 'MD',
    imageFile: 'doctor-website-profile-male.png',
    specialization: 'Pulmonology',
    specializationTags: ['family', 'elderly'],
    experience: 3,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
  {
    fullName: 'Lisa Tepes',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Internist',
    specializationTags: ['eyes'],
    experience: 5,
    siteUrl: 'https://www.google.com',
    availability: [
      {
        day: 'Mon - Sat',
        time: '04:00 PM - 09:00 PM',
      },
      {
        day: 'Sun',
        time: '09:00 PM - 12:00 PM',
      },
    ],
  },
];

export const TRIVIA_SLIDE_CONTENT = [
  {
    header: 'MYCURE 1',
    content: '"64% of consumers would see a doctor via video."',
    source: 'www.americanwell.com',
  },
  {
    header: 'MYCURE 2',
    content: '"64% of consumers would see a doctor via video."',
    source: 'www.americanwell.com',
  },
  {
    header: 'MYCURE 3',
    content: '"64% of consumers would see a doctor via video."',
    source: 'www.americanwell.com',
  },
  {
    header: 'MYCURE 4',
    content: '"64% of consumers would see a doctor via video."',
    source: 'www.americanwell.com',
  },
  {
    header: 'MYCURE 5',
    content: '"64% of consumers would see a doctor via video."',
    source: 'www.americanwell.com',
  },
];

export const USP = [
  {
    title: 'Hundreds of doctors with different specializations from amazing clinics all over the country.',
    popularSearches: ['Dermatologist', 'Pediatrician'],
  },
];

export const SPECIALIZATIONS = ['Dermatologist', 'Dermatologist', 'Physician', 'Gynecologist', 'Surgeon'];

export const SIGN_ME_UP = [
  {
    doctor: [{
      title: 'Are you a Doctor?',
      subTitle: 'Join the crusade.<br>Create your MYCURE account.<br>Onboard now in 5 easy steps',
      btnTxt: 'SIGN ME UP',
    }],
    consult: [{
      title: 'Want to consult online?',
      subTitle: 'Join the family.<br>Create your patient portal now.<br>It\'s secure and easy to use!',
      btnTxt: 'SIGN ME UP',
    }],
  },
];

export const CATEGORY = [
  {
    image: 'icon-pedia.svg',
    title: 'For my kids',
    subTitle: '34 Doctors',
  },
  {
    image: 'icon-dental.svg',
    title: 'For my teeth',
    subTitle: '14 Dentists',
  },
  {
    image: 'icon-derma.svg',
    title: 'For my face & skin',
    subTitle: '90 Dermatologists',
  },
];

export const ABOUT_INFO = {
  clinicName: 'MYCURE',
  clinicsInfo: 'MYCURE Virtual Clinic specializes in telehealth services. MYCURE Virtual Clinic\'s telemedicine service is committed to provide medial consultation via video conference or phone call to our patient 24 hours a day 7 days a week.\n\nMYCURE virtual clinic also offers a robust clinic management system that are being used by hundreds of satisfied clients nationwide. All doctors onboard here are certified under the Philippine Medical Association.',
};

export const SOCIAL_ITEM = {
  title: 'Share the love.',
  icons: [
    { icon: 'mdi-facebook', link: 'https://facebook.com/' },
    { icon: 'mdi-twitter', link: 'https://twitter.com/' },
    { icon: 'mdi-email', link: 'mailto:' },
    { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
  ],
};
