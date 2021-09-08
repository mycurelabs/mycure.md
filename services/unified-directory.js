
/**
 * UnifiedDirectorySearch
 * @param {Object} sdk
 * @param {Object} opts
 * @param {String} opts.type - Entry type, organization | account | service
 * @param {String} opts.text - searchText
 * @param {Object} opts.ref - information specific to organization / service
 * @param {String} opts.ref.type - facility type, or service type
 * @param {String} opts.ref.types - only used when entry type is organization
 * @param {String} opts.ref.subtype - only used when entry type is service
 * @param {String} opts.tags - used for organization entry types to be filtered with service types
 * @param {Object} opts.location - location of user
 * @param {Number} opts.location.lat - latitute
 * @param {Number} opts.location.lng - longitude
 * @param {String []} opts.specializations - specializations
 *
 * # Uses
 * - for type=organization, service types offered are tags with prefix `sto:`
 *   e.g.
 *   UnifiedDirectoryEntry {
 *    type: 'organization'
 *    ref: {
 *      id: 'some-org-id'
 *      type: 'facility'
 *      types: ['clinic'],
 *    }
 *    tags: ['sto:clinic-consultation', 'sto:dignostic', 'sto:dental']
 *   }
 */
export const unifiedDirectorySearch = async (sdk, opts) => {
  if (!opts) return;
  let query = {
    ...opts.text && { $search: opts.text },
    ...opts.tags && { tags: opts.tags },
    type: opts.type,
    $limit: opts.limit,
    $skip: opts.skip,
    $total: true,
  };
  console.log('directory query', query);
  // put location string
  if (opts.location) {
    const { lat, lng } = opts.location;
    query.location = `${lat},${lng},10`;
  }
  if (query.type === 'organization') {
    query = {
      ...query,
      ...opts.ref && {
        ref: {
          type: opts.ref.type,
          types: opts.ref.types,
        },
      },
      ...opts.tags && { tags: opts.tags },
    };
  } else if (query.type === 'service' && opts.ref) {
    query.ref = {
      type: opts.ref.type,
      subtype: opts.ref.subtype,
    };
  }

  const data = await sdk.service('bff/unified-directory').find(query);
  console.log('data', data);
  return { items: data.items, total: data.total };
};
