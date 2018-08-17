import axios from 'axios';

export const getIP = async () => {
  const request = axios.create({
    baseURL: 'https://api.ipify.org/?format=json'
  });
  const { data } = await request.get();
  return data;
};

export const getCountry = async (ip) => {
  const request = axios.create({
    baseURL: `https://api.ipstack.com/${ip}?access_key=${process.env.IP_STACK_KEY}`
  });
  const { data } = await request.get();
  return data;
};
