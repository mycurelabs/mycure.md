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
    firstName: 'Jean',
    lastName: 'Rivera',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Pediatrician',
    specializationTags: ['kids', 'family', 'eyes', 'nose', 'elderly'],
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
    firstName: 'Christ',
    lastName: 'Hilpert',
    title: 'MD',
    imageFile: 'doctor-website-profile-male.png',
    specialization: 'Pulmonology',
    specializationTags: ['kids', 'eyes', 'nose'],
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
    firstName: 'Adrienne',
    lastName: 'Gleichner',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Internist',
    specializationTags: ['family', 'nose', 'elderly'],
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
    firstName: 'Norberto',
    lastName: 'Jones',
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
    firstName: 'Vicente',
    lastName: 'Reinger',
    title: 'MD',
    imageFile: 'doctor-website-profile-male.png',
    specialization: 'Pulmonology',
    specializationTags: ['kids', 'family', 'eyes', 'nose', 'elderly'],
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
    firstName: 'Angela',
    lastName: 'Mosciski',
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
    firstName: 'Cathy',
    lastName: 'Ledner',
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
    firstName: 'Fisher',
    lastName: 'Bergstrom',
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
    firstName: 'Lisa',
    lastName: 'Tepes',
    title: 'MD',
    imageFile: 'doctor-website-profile-female.png',
    specialization: 'Internist',
    specializationTags: ['eyes', 'nose'],
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

export const SOCIAL_ITEM = [{
  title: 'Love this clinic? Share the love.',
  icons: [
    { icon: 'mdi-facebook', link: 'https://facebook.com/' },
    { icon: 'mdi-twitter', link: 'https://twitter.com/' },
    { icon: 'mdi-email', link: 'mailto:' },
    { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
  ],
}];

export const ABOUT_INFO = [{
  clinicName: 'Mycure Clinic',
  firstInfo: 'MYCURE Virtual Clinic specializes in telehealth services. MYCURE Virtual Clinic\'s telemedicine service is committed to provide medial consultation via video conference or phone call to our patient 24 hours a day 7 days a week.',
  secondInfo: 'MCURE virtual clinic also offers a robust clinic management system that are being used by hundreds of satisfied clients nationwide. All doctors onboard here are certified under the Philippine Medical Association.',
}];
