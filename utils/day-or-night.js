export default () => {
  const hours = new Date().getHours();
  // if (localStorage.getItem('app-time')) {
  //   return localStorage.getItem('app-time');
  // }
  if (hours < 6 && hours >= 18) {
    return 'night';
  } else {
    return 'day';
  }
};
