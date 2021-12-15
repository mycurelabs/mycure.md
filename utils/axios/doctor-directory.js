import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import { handleError } from './error-handler';

export const getDoctors = async (opts) => {
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
      url += `&$search[text]=${opts?.searchString}`;
    }

    if (!isEmpty(opts?.specialties)) {
      if (opts?.specialties.length === 1) {
        url += `&doc_specialties=${opts?.specialties[0]}`;
      } else {
        opts?.specialties?.forEach((specialty) => { // eslint-disable-line
          url += '&doc_specialties[$in]=' + specialty;
        });
      }
    }

    if (!isEmpty(opts?.sortBy)) {
      url += `&$sort[${opts.sortBy.field}]=${opts?.sortBy.sort}`;
    }

    if (opts?.limit) {
      url += `&$limit=${opts.limit}`;
    }

    if (opts?.skip) {
      url += `&$skip=${opts.skip}`;
    }

    const { data } = await axios({
      method: 'get',
      url,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
