import sdk from '@mycure/sdk-js';
import { normalizePopulated } from '~/utils/services';
// import { fetchScheduleSlots } from './schedule-slots';

export const fetchClinicWebsiteDoctors = async (opts) => {
  const query = {
    organization: opts.organization,
    roles: { $in: ['doctor'] },
    $populate: {
      personalDetails: {
        service: 'personal-details',
        method: 'get',
        localKey: 'uid',
        foreignKey: 'uid',
      },
      schedulesData: {
        service: 'schedule-slots',
        method: 'find',
        localKey: 'uid',
        foreignKey: 'meta.providers',
        organization: opts.organization,
      },
    },
    $total: true,
  };

  if (opts.specializations) {
    query.specializations = { $in: opts.specializations };
  }

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
            localKey: 'id',
            method: 'find',
            foreignKey: 'organization',
            'meta.providers': opts.id,
          },
        },
      },
    },
  };

  const { items, total } = await sdk.service('organization-members').find(payload);
  return {
    items: items.map(item => ({
      ...item.$populated?.organization,
      /**
       * OrganizationMember#teleconsultQueue
       *
       * This prop is included to serve as indicator if the doctor can book
       * telehealth in the clinic
      */
      ...item.teleconsultQueue && { teleconsultQueue: item.teleconsultQueue },
    })),
    total,
  };
};
