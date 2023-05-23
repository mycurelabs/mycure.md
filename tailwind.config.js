/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0099cc',
        heading: '#1A1A1A',
        text: '#5D5959',
        warning: '#FFAC2A',
      },
      fontFamily: {
        primary: ['Montserrat'],
        secondary: ['Hind Siliguri'],
        general: ['Merriweather'],
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('flowbite/plugin'),
  ],
};
