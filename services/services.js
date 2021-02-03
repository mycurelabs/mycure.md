import { normalizePopulated } from '~/utils/services';

export const fetchClinicServices = async (sdk, opts) => {
  const { items, total } = await sdk.service('services').find({
    facility: opts.facility,
    type: opts.type,
    subtype: opts.subtype,
    $limit: opts.limit || 10,
    $skip: opts.skip,
    // $populate: {
    //   coveragesData: {
    //     service: 'insurance-coverages',
    //     method: 'find',
    //     localKey: 'id',
    //     foreignKey: 'ref',
    //     $populate: {
    //       contractData: {
    //         service: 'insurance-contracts',
    //         key: 'contract',
    //       },
    //     },
    //   },
    // },
  });

  return { items: normalizePopulated(items), total };
};
