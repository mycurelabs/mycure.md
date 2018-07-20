
const sdk = require('@mycure/sdk');
const core = sdk.core;

module = module.exports = (url) => {
  return new Promise((resolve, reject) => {
    core.personalDetails().findOne({
      doc_website: url,
      $populate: {
        _clinics: {
          service: 'organizations',
          method: 'find',
          key: 'id',
          idField: 'createdBy',
          type: 'personal-clinic'
        }
      }
    }).then(account => {
      resolve(account);
    }).catch(error => {
      reject(error);
    });
  });
};

// TODO:
// For directory
// $or: [
//   {
//     'name.firstName': {
//       $regex: url, $options: 'i'
//     }
//   }
// ]
