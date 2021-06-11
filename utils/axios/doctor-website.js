import axios from 'axios';
import { handleError } from './error-handler';

export const recordWebsiteVisit = async (opts) => {
  try {
    const payload = {
      account: opts.uid,
      type: 'doctor-website-visit',
      label: 'Website Visit',
      campaign: 'Website Visit',
      source: window.location.href,
    };
    const data = await axios({
      method: 'post',
      url: `${process.env.API_URL}/system-counters`,
      data: payload,
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const fetchDoctorMetrics = async (opts, sdk) => {
  try {
    const doctorId = opts.uid;
    // Fetch Website visits
    const { total } = await sdk.service('system-counters').find({
      account: doctorId,
      type: 'doctor-website-visit',
    });

    // Fetch patients
    const patients = await axios({
      method: 'get',
      url: `${process.env.API_URL}/metrics/metrics?name=medical_patients_served_total&doctor=${doctorId}`,
    });

    // Fetch medical records
    const records = await axios({
      method: 'get',
      url: `${process.env.API_URL}/metrics/metrics?name=medical_records_total&creator=${doctorId}`,
    });

    return {
      websiteVisits: total,
      patients: patients.data.total,
      records: records.data.total,
    };
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};

export const fetchLearningCornerMaterials = async (opts) => {
  try {
    const searchQuery = opts.searchText ? `&$search=${opts.searchText}` : '';
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_URL}/file-links?account=${opts.account}&public=true${searchQuery}`,
    });
    return data.data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
