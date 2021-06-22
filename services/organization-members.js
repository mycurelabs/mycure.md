import { normalizePopulated } from '~/utils/services';

export const fetchClinicWebsiteDoctors = async (sdk, opts) => {
  const query = {
    organization: opts.organization,
    roles: 'doctor',
    $populate: {
      personalDetails: {
        service: 'personal-details',
        method: 'get',
        localKey: 'uid',
        foreignKey: 'uid',
      },
      scheduleData: {
        service: 'schedule-slots',
        method: 'find',
        localKey: 'uid',
        foreignKey: 'account',
        organization: opts.organization,
      },
    },
  };

  if (opts.searchText) {
    query.$search = {
      organization: opts.organization,
      text: opts.searchText,
      limit: opts.limit || 10,
      skip: opts.skip,
    };
  } else {
    query.$limit = opts.limit || 10;
    query.$skip = opts.skip;
  }
  const { items, total } = await sdk.service('organization-members').find(query);

  return { items: normalizePopulated(items), total };
};

export const fetchUserFacilities = async (sdk, opts) => {
  const payload = {
    $limit: opts.limit,
    $skip: opts.skip,
    uid: opts.id,
    $populate: {
      organization: {
        service: 'organizations',
        key: 'organization',
        $populate: {
          doctorSchedules: {
            service: 'schedule-slots',
            method: 'find',
            localKey: 'id',
            foreignKey: 'organization',
          },
        },
      },
    },
  };

  const { items, total } = await sdk.service('organization-members').find(payload);
  return { items: normalizePopulated(items), total };
};
