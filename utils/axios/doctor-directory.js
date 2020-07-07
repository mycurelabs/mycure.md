import _ from 'lodash';
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
    let url = `${process.env.API_URL}/personal-details?doc_website[$exists]=true`;

    if (opts?.searchString) {
      url += `&$search=${opts?.searchString}`;
    }

    if (opts?.specialty) {
      url += `&doc_specialties=${opts?.specialty}`;
    }

    if (!_.isEmpty(opts?.sortBy)) {
      url += `&$sort[${opts.sortBy.field}]=${opts?.sortBy.sort}`;
    }

    console.warn('url', url);

    const { data } = await axios({
      method: 'get',
      url,
    });

    console.warn('search', data.data);
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
