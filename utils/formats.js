export const formatName = (name, format) => {
  const { firstName, middleName, lastName, generationalSuffix } = name;
  const firstNameTrimmed = firstName?.trim() || '';
  const middleNameTrimmed = middleName?.trim() || '';
  const lastNameTrimmed = lastName?.trim() || '';
  const generationalSuffixTrimmed = generationalSuffix?.trim() || '';
  return format.replace(/firstName/gi, firstNameTrimmed)
    .replace(/middleName/gi, middleNameTrimmed || '')
    .replace(/middleInitial/gi, middleNameTrimmed ? `${middleNameTrimmed.substr(0, 1).toUpperCase()}.` : '')
    .replace(/lastName/gi, lastNameTrimmed)
    .replace(/generationalSuffix/gi, generationalSuffixTrimmed || '')
    .trim();
};

export const formatCurrency = (num = 0, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(num);
};

export const formatAddress = (address, format) => {
  if (!address) return null;
  const { street1, street2, village, city, municipality, province, state, region, country } = address;
  return format.replace(/street1,/gi, street1 ? `${street1},` : '')
    .replace(/street2,/gi, street2 ? `${street2},` : '')
    .replace(/village,/gi, village ? `${village}.` : '')
    .replace(/city,/gi, city ? `${city},` : '')
    .replace(/municipality,/gi, municipality ? `${municipality},` : '')
    .replace(/province,/gi, province ? `${province},` : '')
    .replace(/state,/gi, state ? `${state},` : '')
    .replace(/region,/gi, region ? `${region},` : '')
    .replace(/country/gi, country || '')
    .trim();
};
