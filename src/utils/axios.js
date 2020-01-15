import axios from 'axios';

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
    console.warn(data);
    return data;
  } catch (e) {
    if (e.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(e.response.data);
      console.log(e.response.status);
      const { data } = e.response.data;
      throw data;
    } else if (e.request) {
      // The request was made but no response was received
      // `e.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(e.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', e.message);
    }
    console.log(e.config);
  }
};