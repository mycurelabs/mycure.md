
const sdk = require('@mycure/sdk');
const core = sdk.core;

module = module.exports = () => {
  return new Promise((resolve, reject) => {
    resolve({
      name: {
        firstName: 'Jofferson',
        middleName: 'Ramirez',
        lastName: 'Tiquez'
      }
    });
  });
}