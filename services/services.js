import isEmpty from 'lodash/isEmpty';
import sdk from '@mycure/sdk-js';
import { fetchScheduleSlots } from './schedule-slots';
import { normalizePopulated } from '~/utils/services';
import { initLogger } from '~/utils/logger';

const log = initLogger('ServicesAPI');

// Old Clinic website (new service calls are below)

/**
 *
 * @param {SDK} sdk
 * @param {Object} opts
 * @param {String} opts.facility
 * @param {String} opts.type
 * @param {String} opts.subtype
 * @param {String} opts.limit
 * @param {String} opts.skip
 */
export const fetchClinicServices = async (sdk, opts) => {
  const query = {
    ...opts.facility && { facility: opts.facility },
    ...opts.type && { type: opts.type },
    ...opts.subtype && { subtype: opts.subtype },
    ...opts.tags && { tags: opts.tags },
    $limit: opts.limit || 10,
    $skip: opts.skip,
    archivedAt: null,
    $populate: {
      coveragesData: {
        service: 'insurance-coverages',
        method: 'find',
        localKey: 'id',
        foreignKey: 'ref',
        $populate: {
          contractData: {
            service: 'insurance-contracts',
            key: 'contract',
          },
        },
      },
    },
  };

  if (opts.insurer) {
    query.$analytics = {
      type: 'filter-by-insurer',
      insurer: opts.insurer,
    };
  }

  if (!isEmpty(opts.searchText)) {
    query.$search = opts.searchText;
  }

  const { items, total } = await sdk.service('services').find(query);

  return { items: normalizePopulated(items), total };
};

export const fetchClinicServiceTypes = async (sdk, { facility }) => {
  const { items: serviceTypes } = await sdk.service('services').find({ facility, $distinct: 'type' });
  const { items: serviceSubtypes } = await sdk.service('services').find({ facility, $distinct: 'subtype' });
  return { items: [...serviceTypes, ...serviceSubtypes] };
};

// For new Clinic website

/**
 * @param {Object} opts
 * @type {String} opts.facility - clinic id
 * @type {String} opts.type - Service#type
 * @type {String} opts.subtype - Service#subtype
 * @type {String} opts.limit
 * @type {String} opts.skip
 *
 * @param {Boolean} withSchedules - if schedules of the services should be fetched as well
 */
export const fetchServices = async (opts, withSchedules = false) => {
  const query = {
    ...opts.facility && { facility: opts.facility },
    ...opts.type && { type: opts.type },
    ...opts.subtype && { subtype: opts.subtype },
    ...opts.tags && { tags: opts.tags },
    $limit: opts.limit || 10,
    $skip: opts.skip,
    $populate: {
      coveragesData: {
        service: 'insurance-coverages',
        method: 'find',
        localKey: 'id',
        foreignKey: 'ref',
        $populate: {
          contractData: {
            service: 'insurance-contracts',
            key: 'contract',
          },
        },
      },
    },
  };

  if (opts.insurer) {
    query.$analytics = {
      type: 'filter-by-insurer',
      insurer: opts.insurer,
    };
  }

  if (!isEmpty(opts.searchText)) {
    query.$search = opts.searchText;
  }

  log('fetchServices#query: %O', query);
  console.log('fetchServices#query: %O', query);
  const { items: services, total } = await sdk.service('services').find(query);
  log('fetchServices#services: %O', services);
  console.log('fetchServices#services: %O', services);

  if (withSchedules) {
    const schedulePromises = services.map(async (service) => {
      const { type, subtype } = service;
      const scheduleQuery = {
        organization: opts.facility,
        meta: {
          serviceType: type,
          serviceSubtype: subtype || { $exists: false },
        },
        $populate: {
          providers: {
            service: 'personal-details',
            localKey: 'meta.providers',
            method: 'find',
            foreignKey: 'id',
            foreignOps: '$in',
          },
        },
      };
      const data = await fetchScheduleSlots(sdk, scheduleQuery);
      // Assigned in property 'schedulesData', same level as properties of `Service`.
      return {
        ...service,
        schedulesData: data.items || [],
      };
    });
    const servicesWithSchedules = await Promise.all(schedulePromises);
    log('fetchServices#servicesWithSchedules: %O', servicesWithSchedules);
    console.log('fetchServices#servicesWithSchedules: %O', servicesWithSchedules);
    return { items: normalizePopulated(servicesWithSchedules), total };
  }
  return { items: normalizePopulated(services), total };
};
