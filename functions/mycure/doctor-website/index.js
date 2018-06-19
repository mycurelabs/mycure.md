
const sdk = require('@mycure/sdk');
const core = sdk.core;

module = module.exports = (url) => {
  return new Promise((resolve, reject) => {
    core.accounts().findOne({
      doc_website: url
    }).then(account => {
      console.log('account', account);
      resolve(account);
    }).catch(error => {
      reject(error);
    })
    // resolve({
    //   name: {
    //     firstName: 'Jofferson',
    //     middleName: 'Ramirez',
    //     lastName: 'Tiquez'
    //   }
    // });
  });
}