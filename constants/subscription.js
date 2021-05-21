export const SUBSCRIPTION_MAPPINGS = {
  doctor: {
    lite: {
      memberSeatsMax: 1,
      storageMax: 0.2, // GB
    },
    premium: {
      storageMax: 10,
      inventory: true,
    },
  },
  'doctor-telehealth': {
    lite: {
      memberSeatsMax: 1,
      storageMax: 0.2, // KIB
      onlineBooking: true,
    },
    premium: {
      storageMax: 10,
      inventory: true,
      onlineBooking: true,
    },
  },
  clinic: {
    lite: {
      memberSeatsMax: 10,
      storageMax: 5,
    },
    premium: {
      memberSeatsMax: 20,
      storageMax: 10,
      inventory: true,
      lis: true,
      ris: true,
      pharmacy: false,
      dental: false,
      pme: false,
    },
    platinum: {
      memberSeatsMax: 30,
      storageMax: 50,
      inventory: true,
      pharmacy: true,
      dental: true,
      lis: true,
      ris: true,
      pme: true,
      prm: true,
    },
  },
  diagnostic: {
    lite: {
      memberSeatsMax: 5,
      storageMax: 3,
    },
    premium: {
      memberSeatsMax: 10,
      storageMax: 5,
      inventory: true,
      lis: true,
      ris: true,
      pme: false,
      prm: false,
    },
    platinum: {
      memberSeatsMax: 20,
      storageMax: 10,
      inventory: true,
      pharmacy: true,
      lis: true,
      ris: true,
      pme: true,
      prm: true,
    },
  },
};
