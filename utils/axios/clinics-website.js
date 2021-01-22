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
    url: `${process.env.API_URL}/organizations?id=${opts.username}`,
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
  // fetch memberships
  const { data: membersData } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organization-members?organization=${opts.organization}&roles=doctor`,
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
};

export const getFrontdeskMembers = async (opts) => {
  // fetch memberships
  const { data: membersData } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organization-members?organization=${opts.organization}&roles=frontdesk`,
  });
  return membersData.data;
};

export const searchClinicDoctors = async (opts) => {
  // fetch memberships
  const { data: membersData } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organization-members?organization=${opts.organization}`,
  });
  const members = membersData.data;
  if (!members?.length) return members;

  const searchString = opts.searchString;

  // TODO: replace this with actual server search
  const startPattern = new RegExp(`^${searchString}`, 'i');
  const endPattern = new RegExp(`${searchString}$`, 'i');

  const membersReducer = (accumulator, member) => {
    const { firstNameNormalized, lastNameNormalized } = member?.name;

    if (startPattern.test(firstNameNormalized)) accumulator.push(member);
    else if (startPattern.test(lastNameNormalized)) accumulator.push(member);
    else if (startPattern.test(`${firstNameNormalized} ${lastNameNormalized}`)) accumulator.push(member);
    else if (endPattern.test(firstNameNormalized)) accumulator.push(member);
    else if (endPattern.test(lastNameNormalized)) accumulator.push(member);
    else if (endPattern.test(`${firstNameNormalized} ${lastNameNormalized}`)) accumulator.push(member);

    return accumulator;
  };
  const matchedMembers = members.reduce(membersReducer, []);

  return matchedMembers;
};
