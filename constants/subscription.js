export const SUBSCRIPTION_MAPPINGS = {
  doctor: {
    essentials: {
      memberSeatsMax: 1,
      storageMax: 200000, // KIB
    },
    premium: {
      storageMax: 10000000,
      inventory: true,
    },
  },
  'doctor-telehealth': {
    essentials: {
      memberSeatsMax: 1,
      storageMax: 200000, // KIB
      onlineBooking: true,
    },
    premium: {
      storageMax: 10000000,
      inventory: true,
      onlineBooking: true,
    },
  },
  clinic: {
    essentials: {
      memberSeatsMax: 1,
      storageMax: 200000,
    },
    premium: {
      storageMax: 10000000,
      inventory: true,
      pharmacy: true,
      dental: true,
      lis: true,
      ris: true,
      pme: true,
    },
    platinum: {
      storageMax: 100000000,
      inventory: true,
      pharmacy: true,
      dental: true,
      lis: true,
      ris: true,
      pme: true,
    },
  },
  diagnostic: {
    essentials: {
      memberSeatsMax: 1,
      storageMax: 200000,
    },
    premium: {
      storageMax: 10000000,
      inventory: true,
      pharmacy: true,
      lis: true,
      ris: true,
      pme: true,
    },
    platinum: {
      storageMax: 100000000,
      inventory: true,
      pharmacy: true,
      lis: true,
      ris: true,
      pme: true,
    },
  },
};
