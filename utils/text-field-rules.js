const PASS_LENGTH = 6;

// generic "This field is required."

export const requiredRule = [
  v => !!v || 'This field is required.',
];

export const emailRules = [
  v => !!v || 'E-mail is required',
  v => /^.+@.+\.+[a-zA-Z]{2,3}$/.test(v) || 'Email address must be valid',
];

export const passwordRules = [
  v => !!v || 'Password is required',
  v => !!v && v.length >= PASS_LENGTH ? true : 'Password length must be at least 6 characters in length.',
];

export const numberRule = [
  v => !!v || 'License No. is required',
  v => /^[0-9-]{2,}$/.test(v) || 'At least 2 numbers',
];
