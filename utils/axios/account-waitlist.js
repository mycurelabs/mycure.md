import axios from 'axios';
import { handleError } from './error-handler';

// SIGNUP WAIT LIST
export const createWaitlist = async (user) => {
  try {
    const payload = {
      email: user.email,
      mobileNo: `+${user.countryCallingCode}${user.mobileNo}`,
      personalDetails: {
        name: {
          firstName: user.firstName,
          lastName: user.lastName,
        },
        doc_PRCLicenseNo: user.doc_PRCLicenseNo,
      },
    };
    if (user.otp) { payload.totpToken = user.otp; }
    const { data } = await axios({
      method: 'POST',
      url: `${process.env.API_URL}/account-waitlist`,
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

// FETCHING USER DATA FOR PREFILLED FUNCTIONS IN SIGNUP USING INVITE CODE AS PARAMETER
export const getWaitlist = async (opts) => {
  const { referralCode } = opts;
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/account-waitlist/${referralCode}`,
  });
  return data;
};
