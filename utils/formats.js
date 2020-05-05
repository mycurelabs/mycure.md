export const formatName = (name, format) => {
  const { firstName, middleName, lastName } = name;
  return format.replace(/firstName/gi, firstName)
    .replace(/middleName/gi, middleName || '')
    .replace(/middleInitial/gi, middleName ? `${middleName.substr(0, 1).toUpperCase()}.` : '')
    .replace(/lastName/gi, lastName);
};

export const formatCurrency = (num = 0, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(num);
};
