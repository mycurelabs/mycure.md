import axios from 'axios';
import { handleError } from './error-handler';

export const getFeaturedHospitals = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
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

export const getFeaturedClinics = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
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
    method: 'GET',
    url: `${process.env.API_URL}/organizations?type=cms&id=${opts.username}`,
  });
  return data.data;
};

export const getClinicWebsite = async (opts) => {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organizations?type=personal-clinic&id=${opts.username}`,
  });
  return data.data;
};

export const getServices = async (opts) => {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/services?facility=${opts.facility}`,
  });
  return data.data;
};

export const getMembership = async (opts) => {
  const { data } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organization-members?organization=${opts.organization}`,
  });
  return data.data;
};
