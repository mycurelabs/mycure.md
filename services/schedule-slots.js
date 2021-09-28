import { normalizePopulated } from '~/utils/services';

/**
 * FetchScheduleSlots
 *
 * Fetch all schedules of either a doctor or clinic.
 * Clinic schedules are all fetched regardless of service type
 *
 * @param {object} sdk - SDK instance
 * @param {object} opts - payload
 * @param {string} opts.organization - facility id
 * @param {string} opts.account  - optional account uid, supply only when fetching schedules for a specific doctor
 * @param {object} opts.meta - ScheduleSlot#meta
 * @param {string} opts.meta.serviceType
 * @param {string} opts.meta.serviceSubtype
 * @param {string} opts.meta.testSection
 * @param {string} opts.meta.providers
 */
export const fetchScheduleSlots = async (sdk, opts) => {
  try {
    if (!opts?.organization) return;
    let query = {
      organization: opts.organization,
      ...opts.$populate && { $populate: opts.$populate },
    };

    /**
     * - For Doctor Schedules
     *
     *  Doctor schedules are relevant only to consultation services.
     */
    if (opts.account) {
      query = {
        ...query,
        account: opts.account,
        'meta.serviceType': 'clinical-consultation',
        'meta.providers': { $in: [opts.account] },
      };

      const { items, total } = await sdk.service('schedule-slots').find(query);
      return { items: normalizePopulated(items), total };
    }

    /**
     * For Clinic Schedules
     *
     * Fetches all clinic schedules
     */
    if (opts.meta) {
      // console.log('here');
      query = {
        ...query,
        'meta.serviceType': opts.meta.serviceType,
        'meta.serviceSubtype': opts.meta.serviceSubtype,
      };
    }
    const { items, total } = await sdk.service('schedule-slots').find(query);
    return { items: normalizePopulated(items), total };
  } catch (e) {
    console.error(e);
  }
};
