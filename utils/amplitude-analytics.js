
export const amplitudeTracker = (code, path) => {
  /**
   *  NOTE: when testing or adding new amplitude events,
   *  use a console log and comment the window amplitude code
   *  to see if this is firing off so as to not use up the limited events on testing.
   *  when its time to trigger the events for adding them to charts, or when its time to push changes
   *  comment the console log again and uncomment the window amplitude code
   *  console.log(code, '<--->', path);
   */
  // include path for future analysis of roles movement
  window.$amplitude.logEvent(code, { path });
};

export const logEvent = (event, properties) => {
  try {
    window.$amplitude.logEvent(event, properties);
  } catch (error) {
    console.error(error);
  }
};

export const resetAmplitudeIdentityTracker = () => {
  window.$amplitude.setUserId(null);
  window.$amplitude.clearUserProperties();
  window.$amplitude.regenerateDeviceId();
};

export const setAmplitudeIdentityTracker = (uid, roles) => {
  resetAmplitudeIdentityTracker(); // safety reset of user properties
  window.$amplitude.setUserId(uid);
  window.$amplitude.setUserProperties({ roles });
};

/**
 * @param {object} opts
 * @param {Account} opts.account
 * @param {OrganizationMember} opts.membership
 */
export const setUser = (opts) => {
  try {
    // clear current user, to be sure
    resetAmplitudeIdentityTracker();

    // require unique account uid
    if (!opts?.account?.uid) throw new Error('No account UID provided');

    // set amplitude user properties
    window.$amplitude.setUserId(opts.account.uid);
    window.$amplitude.setUserProperties({
      roles: opts.membership?.roles,
      specializations: opts.account.doc_specialties,
    });
  } catch (error) {
    console.error(error);
  }
};
