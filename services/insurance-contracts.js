import isEmpty from 'lodash/isEmpty';
import { normalizePopulated } from '~/utils/services';

export const fetchInsuranceContracts = async (sdk, opts) => {
  const query = {
    $sort: { insurerName: 1 },
    $limit: opts.limit || 20,
    $skip: opts.skip,
  };

  if (!isEmpty(opts.searchText)) {
    query.insurerName = { $regex: `^${opts.searchText}`, $options: 'i' };
  }

  const { items, total } = await sdk.service('insurance-contracts').find(query);

  return { items: normalizePopulated(items), total };
};
