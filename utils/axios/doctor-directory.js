import axios from 'axios';
import { handleError } from './error-handler';

export const getDoctors = async ({ limit = 20 }) => {
  try {
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

// TODO: Add logic for featured doctor
export const getFeaturedDoctors = async ({ limit = 6 }) => {
  try {
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
    // const payload = {
    //   $search: opts.search,
    // };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.API_URL}/personal-details`,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
