
/**
 *
 * @param {Object} sdk
 * @param {Object} opts
 * @param {String} opts.type organization | account | service
 * @param {String} opts.text - searchText
 */
export const unifiedSearch = async (sdk, opts) => {
  const query = {
    type: opts.type,
    name: opts.text,
  };

  // Populate according to type
  if (query.type === 'account') {
    query.$populate = {
      personalDetails: {
        service: 'personal-details',
        method: 'get',
        localKey: 'ref',
      },
    };
  }
  
  const { items, total } = await sdk.service('bff/unified-search').find(query);
  return { items, total };
};
