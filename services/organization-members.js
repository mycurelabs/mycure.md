import { normalizePopulated } from '~/utils/services';

export const fetchClinicWebsiteDoctors = async (sdk, opts) => {
  const { items, total } = await sdk.service('organization-members').find({
    organization: opts.organization,
    roles: 'doctor',
    $limit: opts.limit || 10,
    $skip: opts.skip,
    $populate: {
      personalDetails: {
        service: 'personal-details',
        method: 'get',
        localKey: 'uid',
        foreignKey: 'uid',
      },
      scheduleData: {
        service: 'schedule-slots',
        method: 'get',
        localKey: 'uid',
        foreignKey: 'account',
        organization: opts.organization,
      },
    },
  });

  return { items: normalizePopulated(items), total };
};
