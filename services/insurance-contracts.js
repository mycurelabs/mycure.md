import isEmpty from 'lodash/isEmpty';
import sdk from '@mycure/sdk-js';
import { normalizePopulated } from '~/utils/services';
import { initLogger } from '~/utils/logger';

const log = initLogger('ServicesAPI');

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

export const fetchClinicInsurers = async (opts) => {
  if (!opts.insured) return;
  const query = {
    insured: opts.insured,
    type: 'insurance-facility',
    insurerSubtype: 'hmo',
    $populate: {
      coveragesData: {
        service: 'organizations',
        localKey: 'insurer',
        foreignKey: 'id',
        method: 'findOne',
      },
    },
    $total: true,
  };
  log('fetchServices#query: %O', query);
  const { items: providers } = await sdk.service('insurance-contracts').find(query);
  log('fetchServices#services: %O', providers);
  return { items: normalizePopulated(providers) };
};
