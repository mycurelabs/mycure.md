import axios from 'axios';

function handleError (e) {
  if (e.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(e.response.data);
    // console.log(e.response.status);
    const { data } = e.response.data;
    return data;
  } else {
    // Something happened in setting up the request that triggered an Error
    return e;
  }
}

export const signin = async (opts) => {
  try {
    const payload = {
      email: opts.email,
      password: opts.password,
    };
    if (opts.otp) payload.totpToken = opts.otp;
    const { data } = await axios({
      method: 'post',
      url: `${process.env.VUE_APP_API}/authentication`,
      data: payload
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
      email: opts.email
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.VUE_APP_API}/authentication`,
      data: payload
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
      url: `${process.env.VUE_APP_API}/mailer`,
      data: payload
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
      url: `${process.env.VUE_APP_IPSTACK_API}/check?access_key=${process.env.VUE_APP_IPSTACK_API_KEY}&fields=${fields.join(',')}`
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
      'callingCodes'
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
      url: `${process.env.VUE_APP_API}/fixtures?type=country&$limit=${limit}&$skip=${skip}`,
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
      mobileNo: opts.mobileNo,
      password: opts.password,
      personalDetails: {
        name: {
          firstName: opts.firstName,
          lastName: opts.lastName
        },
        doc_PRCLicenseNo: opts.doc_PRCLicenseNo,
        mobileNo: opts.mobileNo
      },
      organization: {
        type: 'personal-clinic',
        superadmin: {
          roles: ['doctor']
        },
        name:  `${opts.firstName}'s Clinic`
      }
    };
    if (opts.otp) payload.totpToken = opts.otp;
    const { data } = await axios({
      method: 'post',
      url: `${process.env.VUE_APP_API}/accounts`,
      data: payload
    });
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
        code: opts.code
      }
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.VUE_APP_API}/authentication`,
      data: payload
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
      action: 'sendVerificationSms'
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.VUE_APP_API}/authentication`,
      headers: {
        'Authorization': 'Bearer ' + opts.token
      },
      data: payload
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};