import isEmpty from 'lodash/isEmpty';
import { normalizePopulated } from '~/utils/services';

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
    if (isEmpty(query.$and)) query.$and = [];
    query.$and.push(
      { name: { $regex: `^${opts.searchText}`, $options: 'gi' } },
    );
  }

  const { items, total } = await sdk.service('services').find(query);

  return { items: normalizePopulated(items), total };
};

export const fetchClinicServiceTypes = async (sdk, { facility }) => {
  const { items: serviceTypes } = await sdk.service('services').find({ facility, $distinct: 'type' });
  const { items: serviceSubtypes } = await sdk.service('services').find({ facility, $distinct: 'subtype' });
  return { items: [...serviceTypes, ...serviceSubtypes] };
};
