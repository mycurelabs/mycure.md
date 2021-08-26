import { normalizePopulated } from '~/utils/services';
// import { fetchScheduleSlots } from './schedule-slots';

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

/**
 * FetchUserFacilities
 *
 * Fetch a user's facilities that they are part of.
 * @param {Object} sdk
 * @param {Object} opts
 * @param {Number} opts.limit
 * @param {Number} opts.skip
 * @param {String} opts.id
 */
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
            account: opts.id,
            // - TODO: Confirm if meta is allowed
            meta: {
              serviceType: 'clinical-consultation',
              providers: { $in: [opts.id] },
            },
          },
        },
      },
    },
  };

  const { items, total } = await sdk.service('organization-members').find(payload);
  return { items: items.map(item => item.$populated?.organization), total };
};
