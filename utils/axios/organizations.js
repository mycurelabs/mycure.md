import axios from 'axios';
import _ from 'lodash';
import { handleError } from './error-handler';

export const getOrganization = async (opts, website = false) => {
  try {
    const orgId = opts.id;

    const { data } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/organizations/${orgId}`,
    });

    if (data || !website) return data;

    const { data: websiteData } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/organizations?websiteId=${orgId}`,
    });
    return websiteData.data[0];
  } catch (e) {
    console.error(e);
    handleError(e);
  }
};

export const getChildOrganizations = async (opts) => {
  try {
    const { parentOrgId } = opts;

    const { data: childOrgs } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/organizations?parent=${parentOrgId}`,
    });

    return childOrgs.data;
  } catch (e) {
    console.error(e);
    handleError(e);
  }
};

export const getLocationTags = async (opts) => {
  try {
    const { parentOrgId } = opts;

    const childOrgs = await getChildOrganizations({ parentOrgId });

    const childOrgsReducer = (accumulator, childOrg) => {
      if (childOrg?.locationTags && childOrg?.locationTags.length) {
        for (const locationTag of childOrg?.locationTags) {
          accumulator.push({
            orgId: childOrg.id,
            locationTag,
            picURL: childOrg.picURL,
          });
        }
      }
      return accumulator;
    };
    const locationTags = childOrgs.reduce(childOrgsReducer, []);

    if (!locationTags && !locationTags.length) return [];

    const uniqueLocationTags = [...new Set(locationTags)];

    return uniqueLocationTags;
  } catch (e) {
    console.error(e);
    handleError(e);
  }
};

export const getOrgDoctorMembers = async (opts) => {
  const { data: membersData } = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/organization-members?organization=${opts.organization}&roles=doctor`,
  });
  const members = membersData.data;
  if (!members?.length) return members;

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
  return await Promise.all(populatedMembersPromises);
};

export const getProviders = async (opts) => {
  try {
    const { parentOrgId } = opts;

    const childOrgs = await getChildOrganizations({ parentOrgId });
    const providerPromises = childOrgs.map(async (childOrg) => {
      const childOrgMembers = await getOrgDoctorMembers({ organization: childOrg.id });
      for (const childOrgMember of childOrgMembers) {
        return { ...childOrgMember };
      }
    });
    const results = await Promise.all(providerPromises);
    const uniqueProviders = _.uniqBy(results, 'uid');

    return uniqueProviders;
  } catch (e) {
    console.error(e);
    handleError(e);
  }
};
