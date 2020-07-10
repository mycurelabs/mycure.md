import axios from 'axios';
import { handleError } from './error-handler';

export const getDoctors = async (opts) => {
  try {
    const { limit } = opts || {};
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_URL}/personal-details?doc_website[$exists]=true&$limit=${limit}`,
    });
    console.warn(data);
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

// TODO: Add logic for featured doctor
export const getFeaturedDoctors = async (opts) => {
  try {
    const { limit } = opts || {};
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_URL}/personal-details?doc_website[$exists]=true&$limit=${limit}`,
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

export const searchDoctors = async (opts) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/personal-details?doc_website[$exists]=true&$search=${opts.searchString}`,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
