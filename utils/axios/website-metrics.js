import axios from 'axios';
import { handleError } from './error-handler';

export const fetchWebsiteMetrics = async () => {
  try {
    const { data: medicalRecordsData } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/metrics/metrics?name=new_medical_records_total&$aggregate[sum]=1`,
    });
    const { data: patientsData } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/metrics/metrics?name=new_medical_patients_total&$aggregate[sum]=1`,
    });

    const { data: providersData } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/metrics/metrics?name=new_facilities_total&$aggregate[sum]=1`,
    });

    return {
      medicalRecordsData: medicalRecordsData[0]?.data[0]?.value || 0,
      patientsData: patientsData[0]?.data[0]?.value || 0,
      providersData: providersData[0]?.data[0]?.value || 0,
    };
  } catch (e) {
    throw handleError(e);
  }
};
