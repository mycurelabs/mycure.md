// import _ from 'lodash';
import axios from 'axios';
import { handleError } from './error-handler';

export const getFeaturedHospitals = async (opts) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_URL}/organizations?type=cms`,
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

export const getFeaturedClinics = async (opts) => {
  try {
    const { data } = await axios({
      method: 'get',
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

export const getHospitalWebsite = async (opts) => {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.API_URL}/organizations?type=cms&id=${opts}`,
  });
  return data.data;
};

export const getClinicWebsite = async (opts) => {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.API_URL}/organizations?type=personal-clinic&id=${opts}`,
  });
  return data.data;
};

export const getServices = async (opts) => {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/services?facility=${opts}`,
  });
  return data.data;
};
