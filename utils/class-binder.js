/**
 * NOTE: The mixins isMobile, isRegularScreen, and isWideScreen should be present
 * This util returns a mapped class object that can be binded to a class property and will apply according to the screen size
 */

export default (context = {}, {
  mobile = [],
  regular = [],
  wide = [],
}) => {
  const mobileClasses = `${mobile.join(' ')}`;
  const regularClasses = `${regular.join(' ')}`;
  const wideClasses = `${wide.join(' ')}`;

  if (!wide.length) {
    return {
      [mobileClasses]: context.$isMobile,
      [regularClasses]: !context.$isMobile,
    };
  }

  return {
    [mobileClasses]: context.$isMobile,
    [regularClasses]: context.$isRegularScreen,
    [wideClasses]: context.$isWideScreen,
  };
};
