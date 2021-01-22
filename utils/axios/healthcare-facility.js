import axios from 'axios';
import { handleError } from './error-handler';

export const getFacilities = async (opts) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/organizations?type=cms&parent=${opts.parentId}`,
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
  } catch (error) {
    console.error(error);
    throw handleError(error);
  }
};

export const getFacilityMembers = async (opts) => {
  try {
    // fetch memberships
    const { data: membersData } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/organization-members?organization=${opts.orgId}`,
    });
    const members = membersData.data;
    if (!members?.length) return members;

    // fetch personal details
    const populatedMembersPromises = members.map(async (member) => {
      const { data: personalDetailsData } = await axios({
        method: 'GET',
        url: `${process.env.API_URL}/personal-details/${member.uid}`,
      });
      return {
        ...member,
        personalDetails: personalDetailsData,
      };
    });
    return Promise.all(populatedMembersPromises);
  } catch (error) {
    console.error(error);
    throw handleError(error);
  }
};

export const getFacilityServices = async (opts) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/services?facility=${opts.orgId}`,
    });
    return data.data;
  } catch (error) {
    console.error(error);
    throw handleError(error);
  }
};

export const searchFacilities = async (opts) => {
  try {
    let url = `${process.env.API_URL}/organizations?type=cms&parent=${opts.parentId}`;

    if (opts?.searchString) {
      url += `&name[$regex]=${opts?.searchString}&name[$options]=i`;
    }

    const { data } = await axios({
      method: 'GET',
      url,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
