export default (forcedDay) => {
  if (forcedDay) return 'day';
  const hours = new Date().getHours();
  if (hours < 6 || hours > 17) {
    return 'night';
  } else {
    return 'day';
  }
};
