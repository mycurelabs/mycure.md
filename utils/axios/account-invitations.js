import axios from 'axios';
import { handleError } from './error-handler';

// NOTE: not used
export const getAccountInvitations = async (opts) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_URL}/account-invitations/${opts.referralCode}`,
    });
    console.log(data);
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
