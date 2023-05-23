/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0099cc',
        heading: '#1A1A1A',
        text: '#5D5959',
        warning: '#FFAC2A',
      },
      fontFamily: {
        primary: ['Inter'],
      },
    },
  },
  daisyui: {
    base: false,
    themes: [
      {
        mycure: {
          primary: '#0099cc',
          secondary: '#424242',
          accent: '#82B1FF',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#2196F3',
          success: '#7fad33',
          warning: '#FFC107',
          error: '#f75a5f',
        },
      },
      'light',
    ],
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
