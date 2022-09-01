export const state = () => ({
  account: {},
  promoCode: null,
  referralCode: null,
});

export const mutations = {
  setAccount (state, data) {
    state.account = data;
  },
  setPromoCode (state, code) {
    state.promoCode = code;
  },
  setReferralCode (state, code) {
    state.promoCode = code;
  },
};
