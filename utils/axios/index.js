import axios from 'axios';
import { handleError } from './error-handler';

// NOTE: Do not remove yet
// async function resendVerificationEmail (opts) {
//   try {
//     const payload = {
//       email: opts.email,
//       password: opts.password,
//     };
//     const { data } = await axios({
//       method: 'post',
//       url: `${process.env.API_URL}/authentication`,
//       data: payload,
//     });
//     const accessToken = data.accessToken;
//     await axios({
//       method: 'post',
//       url: `${process.env.API_URL}/authentication`,
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       data: {
//         action: 'sendVerificationEmail',
//       },
//     });
//   } catch (e) {
//     console.error(e);
//     throw handleError(e);
//   }
// }

export const getDoctorWebsite = async (opts) => {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.API_URL}/personal-details?doc_website=${opts.username}`,
  });
  return data.data[0];
};

export const getDoctorClinics = async (opts) => {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organizations?createdBy=${opts.uid}`,
  });
  return data.data;
};

export const signin = async (opts) => {
  try {
    const payload = {
      email: opts.email,
      password: opts.password,
    };
    if (opts.otp) { payload.totpToken = opts.otp; }
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/authentication`,
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const forgotPassword = async (opts) => {
  try {
    const payload = {
      action: 'sendPasswordResetEmail',
      email: opts.email,
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/authentication`,
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const sendMultiSpecialtyInquiry = async (opts) => {
  try {
    const payload = opts;
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/mailer`,
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const getCountry = async () => {
  try {
    const fields = [
      'country_code',
      'country_name',
      'latitude',
      'longitude',
      'location.country_flag',
      'location.calling_code',
    ];
    const { data } = await axios({
      method: 'get',
      url: `${process.env.IPSTACK_API}/check?access_key=${process.env.IPSTACK_API_KEY}&fields=${fields.join(',')}`,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const getCountries = async () => {
  try {
    const fields = [
      'name',
      'flag',
      'callingCodes',
    ];
    const { data } = await axios({
      method: 'get',
      url: `https://restcountries.eu/rest/v2/all?fields=${fields.join(';')}`,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const getMycureCountries = async (opts) => {
  try {
    const { limit, skip } = opts;
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_URL}/fixtures?type=country&$limit=${limit}&$skip=${skip}`,
    });
    return data.data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const signupIndividual = async (opts) => {
  try {
    const payload = {
      email: opts.email,
      mobileNo: `+${opts.countryCallingCode}${opts.mobileNo}`,
      password: opts.password,
      personalDetails: {
        name: {
          firstName: opts.firstName,
          lastName: opts.lastName,
        },
        doc_PRCLicenseNo: opts.doc_PRCLicenseNo,
        mobileNo: `+${opts.countryCallingCode}${opts.mobileNo}`,
      },
      organization: {
        type: 'personal-clinic',
        superadmin: {
          roles: ['doctor'],
        },
        name: `${opts.firstName}'s Clinic`,
      },
    };
    if (opts.otp) { payload.totpToken = opts.otp; }
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/accounts`,
      data: payload,
    });
    // await resendVerificationEmail({ email: opts.email, password: opts.password });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const signupSpecialized = async (opts) => {
  try {
    const payload = {
      skipMobileNoVerification: true, // only for specialized signup
      email: opts.email,
      mobileNo: `+${opts.countryCallingCode}${opts.mobileNo}`,
      password: opts.password,
      personalDetails: {
        name: {
          firstName: opts.firstName,
          lastName: opts.lastName,
        },
        doc_PRCLicenseNo: opts.doc_PRCLicenseNo,
        mobileNo: `+${opts.countryCallingCode}${opts.mobileNo}`,
      },
      organization: {
        type: 'facility',
        types: [opts.clinicType],
        superadmin: {
          roles: ['doctor'],
        },
        name: `${opts.firstName}'s Clinic`,
        subscription: {
          ...opts.subscription,
          stripeCheckoutSuccessURL: process.env.STRIPE_CHECKOUT_SUCCESS_URL,
          stripeCheckoutCancelURL: process.env.STRIPE_CHECKOUT_CANCEL_URL,
        },
      },
    };
    if (opts.otp) { payload.totpToken = opts.otp; }
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/accounts`,
      data: payload,
    });
    // await resendVerificationEmail({ email: opts.email, password: opts.password });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const verifyMobileNo = async (opts) => {
  try {
    const payload = {
      action: 'applyActionCode',
      code: opts.code,
      payload: {
        code: opts.code,
      },
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/authentication`,
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const resendVerificationCode = async (opts) => {
  try {
    const payload = {
      action: 'sendVerificationSms',
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/authentication`,
      headers: {
        Authorization: 'Bearer ' + opts.token,
      },
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const recordWebsiteVisit = async (opts) => {
  try {
    const payload = {
      account: opts.uid,
      type: 'doctor-website-visit',
      label: 'Website Visit',
      campaign: 'Website Visit',
      source: window.location.href,
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/system-counters`,
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export * from './doctor-directory';
