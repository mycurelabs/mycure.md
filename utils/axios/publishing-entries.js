import axios from 'axios';
import { handleError } from './error-handler';

export const getEntry = async (opts) => {
  try {
    const url = new URL(`${process.env.API_URL}/publishing/entries`);
    url.searchParams.append('type', 'organization');
    url.searchParams.append('status', 'published');
    url.searchParams.append('$or[0][organization.id]', opts.id);
    url.searchParams.append('$or[1][organization.websiteId]', opts.id);

    const { data } = await axios({
      method: 'GET',
      url: url.toString(),
    });

    const entry = data.data?.[0]?.organization;

    return entry;
  } catch (e) {
    console.error(e);
    handleError(e);
  }
};
