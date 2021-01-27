export const getOrganizationWebsite = async (sdk, opts) => {
  const query = {
    $or: [
      {
        id: opts.id,
      },
      {
        websiteId: opts.id,
      },
    ],
  };
  console.warn('query', query);
  const { items } = await sdk.service('organizations').find(query);
  console.warn('result', items);
  return items;
};
