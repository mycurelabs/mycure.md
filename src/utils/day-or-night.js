export default () => {
  const hours = new Date().getHours();
  if (hours >= 6 && hours <= 17) {
    return 'day';
  } else {
    return 'night';
  }
};