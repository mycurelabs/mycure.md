import axios from 'axios';

// Fall-backs
const MEDICAL_RECORDS_FALLBACK = 2700000;
const PATIENTS_FALLBACK = 1500000;
const PROVIDERS_FALLBACK = 1500;

export const fetchWebsiteMetrics = async () => {
  try {
    console.time('fetchWebsiteMetrics');
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

    // Sub data
    const { data: doctorsData } = await axios({
      method: 'GET',
      url: `${process.env.API_URL}/metrics/metrics?name=new_users_total&labels.is_doctor=true&$aggregate[sum]=1`,
    });
    console.timeEnd('fetchWebsiteMetrics');

    // const medicalRecordsData = await sdk.service('metrics/metrics').find({
    //   name: 'new_medical_records_total',
    //   $aggregate: { sum: 1 },
    // });

    // const patientsData = await sdk.service('metrics/metrics').find({
    //   name: 'new_medical_patients_total',
    //   $aggregate: { sum: 1 },
    // });
    // const providersData = await sdk.service('metrics/metrics').find({
    //   name: 'new_facilities_total',
    //   $aggregate: { sum: 1 },
    // });
    return {
      // Patients will be added to records as well
      medicalRecordsData: (medicalRecordsData[0]?.data[0]?.value || MEDICAL_RECORDS_FALLBACK) + (patientsData[0]?.data[0]?.value || PATIENTS_FALLBACK),
      patientsData: (patientsData[0]?.data[0]?.value || PATIENTS_FALLBACK),
      providersData: (providersData[0]?.data[0]?.value || PROVIDERS_FALLBACK) + (doctorsData[0]?.data[0]?.value || 0),
      // medicalRecordsData: medicalRecordsData[0]?.value || 0,
      // patientsData: patientsData[0]?.value || 0,
      // providersData: providersData[0]?.value || 0,
    };
  } catch (e) {
    // When error occurs, just return fallback value to prevent breaking the site
    // Mostly used for Brave Shield
    return {
      medicalRecordsData: MEDICAL_RECORDS_FALLBACK + PATIENTS_FALLBACK,
      patientsData: PATIENTS_FALLBACK,
      providersData: PROVIDERS_FALLBACK,
    };
  }
};
