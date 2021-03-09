export const fetchOrganizations = async (sdk, opts) => {
  const query = {
    $limit: opts.limit,
    $skip: opts.skip,
  };

  if (opts.type) query.type = opts.type;

  if (opts.searchText) {
    query.$and = [];
    query.$and.push(
      { name: { $regex: `^${opts.searchText}`, $options: 'gi' } },
    );
  }

  if (opts.locationText) {
    if (!query.$and) query.$and = [];
    query.$and.push(
      { 'address.city': { $regex: `^${opts.locationText}`, $options: 'gi' } },
    );
  }

  const { items, total } = await sdk.service('organizations').find(query);
  return { items, total };
};
