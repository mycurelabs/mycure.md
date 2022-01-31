import axios from 'axios';

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
  const query = {
    $search: opts.text || '*',
    type: opts.type,
    $limit: opts.limit || 10,
    $skip: opts.skip || 0,
    // Adds a 'total' property to the return value
    $total: true,
    /**
     * Shows the search matching info
     *
     * The $searchMeta is added because we needed to identify what parts of the text are matching with the searchText
     * which is found in the `searchResult` property.
     *
     * If this is true, we will be using axios instead.
    */
    $searchMeta: opts.searchMeta,
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
  // if (query.type === 'organization') {
  //   query = {
  //     ...query,
  //     ...opts.ref && {
  //       ref: {
  //         type: opts.ref.type,
  //         types: opts.ref.types,
  //       },
  //     },
  //   };
  // } else if (query.type === 'service' && opts.ref) {
  //   query.ref = {
  //     type: opts.ref.type,
  //     subtype: opts.ref.subtype,
  //   };
  // }

  // Limit this feature to when there is an existing search text only
  if (opts.searchMeta && opts.text) {
    // Use axios
    const queryKeys = Object.keys(query);
    const axiosQueries = [];
    queryKeys.map((key) => {
      axiosQueries.push(`${key}=${query[key]}`);
      return key;
    });
    const formattedFirstKey = `?${axiosQueries[0]}`;
    const omittedFirstKeyQueries = [...axiosQueries].filter((item, key) => key > 0).join('&');
    const formattedURLQuery = `${formattedFirstKey}${omittedFirstKeyQueries ? '&' : ''}${omittedFirstKeyQueries}`;
    const searchData = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/bff/unified-directory/${formattedURLQuery}`,
    });
    const { data, total, searchResult } = searchData.data;
    const { hits } = searchResult;
    return {
      items: data.map(item => ({
        ...item,
        matched: hits.find(hit => hit.document.id === item.id).highlights
          .find(h => h.field === 'name')?.matched_tokens[0],
      })),
      total,
    };
  } else {
    // SDK
    const data = await sdk.service('bff/unified-directory').find(query);
    return { items: data.items, total: data.total };
  }
};
