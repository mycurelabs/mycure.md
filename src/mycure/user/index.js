import { core } from '@mycure/sdk';

export const searchDoctor = async (query) => {
  try {
    return await core.personalDetails().find({
      doc_PRCLicenseNo: {
        $exists: true
      },
      $or: [
        {
          'name.firstName': {
            $regex: query || '', $options: 'i'
          }
        },
        {
          'name.middleName': {
            $regex: query || '', $options: 'i'
          }
        },
        {
          'name.lastName': {
            $regex: query || '', $options: 'i'
          }
        }
      ]
      // $limit: 1
    });
  } catch (e) {
    throw e;
  }
};
