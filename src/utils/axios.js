import axios from 'axios';

function handleError (e) {
  if (e.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(e.response.data);
    // console.log(e.response.status);
    const { data } = e.response.data;
    return data;
  } else if (e.request) {
    // The request was made but no response was received
    // `e.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.log(e.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', e.message);
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