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
    $search: opts.text || '*',
    type: opts.type,
    $limit: opts.limit || 10,
    $skip: opts.skip,
    $total: true,
  };
  // put tags
  if (opts.tags?.length) {
    const { tags } = opts;
    query.tags = tags.length === 1 ? tags[0] : { $in: tags };
  }
  // put location string
  if (opts.location) {
    const { lat, lng } = opts.location;
    const locationKM = opts.locationKM || 5;
    query.location = `${lat},${lng},${locationKM}`; // - 5 stands for radius in km
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
    };
  } else if (query.type === 'service' && opts.ref) {
    query.ref = {
      type: opts.ref.type,
      subtype: opts.ref.subtype,
    };
  }

  const data = await sdk.service('bff/unified-directory').find(query);
  return { items: data.items, total: data.total };
};
