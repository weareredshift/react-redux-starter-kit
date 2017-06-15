/**
 * Changes the active breakpoint
 *
 * @param {string} breakpointName          String defining the active breakpoint
 * @param {number} breakpointSize          Number defining the active breakpoint
 * @param {Array} queryState               Array of mediaQueryList objects
 * @return {Object} Action object
 */
export function setActiveBreakpoint (breakpointName, breakpointSize, queryState) {
  return ({
    type: 'SET_ACTIVE_BREAKPOINT', breakpointName, breakpointSize, queryState
  });
}

/**
 * Tracks location change
 *
 * @param      {string}  location  The location string
 * @return     {Object}  Action object
 */
export function locationChange (location) {
  return ({
    type: 'LOCATION_CHANGE', location
  });
}

// Specialized actions below -- don't follow patterns
// When adding actions here, add them to the exceptions array in the actions spec.

export function updateLocation ({ dispatch }) {
  return function (nextLocation) {
    dispatch(locationChange(nextLocation));
  };
}
