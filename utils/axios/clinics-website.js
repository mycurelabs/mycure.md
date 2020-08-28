// import _ from 'lodash';
import axios from 'axios';
import { handleError } from './error-handler';

export const getFeaturedHospitals = async (opts) => {
  try {
    // const { limit } = opts || {};
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_URL}/organizations?type=cms`,
      // url: `${process.env.API_URL}/personal-details?doc_website[$exists]=true&$limit=${limit}`,
    });
    if (data?.total === 0) {
      return {
        total: 0,
        data: [],
      };
    }
    return {
      total: data?.total,
      data: data?.data,
    };
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const getHospitalWebsite = async (opts) => {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.API_URL}/organizations?type=cms?name=${opts.username}`,
  });
  return data.data[0];
};

export const getHospitalProfile = async (opts) => {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organizations?createdBy=${opts.uid}`,
  });
  return data.data;
};

export const getFeaturedClinics = async (opts) => {
  try {
    // const { limit } = opts || {};
    const { data } = await axios({
      method: 'get',
      // url: `${process.env.API_URL}/personal-details?doc_website[$exists]=true&$limit=${limit}`,
      url: `${process.env.API_URL}/organizations?type=personal-clinic`,
    });
    if (data?.total === 0) {
      return {
        total: 0,
        data: [],
      };
    }
    return {
      total: data?.total,
      data: data?.data,
    };
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
