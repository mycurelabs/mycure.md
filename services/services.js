import { isEmpty } from 'lodash';
import { normalizePopulated } from '~/utils/services';

export const fetchClinicServices = async (sdk, opts) => {
  const query = {
    facility: opts.facility,
    type: opts.type,
    subtype: opts.subtype,
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

  if (!isEmpty(opts.searchText)) {
    if (isEmpty(query.$and)) query.$and = [];
    query.$and.push(
      { name: { $regex: `^${opts.searchText}`, $options: 'gi' } },
    );
  }

  const { items, total } = await sdk.service('services').find(query);

  return { items: normalizePopulated(items), total };
};
