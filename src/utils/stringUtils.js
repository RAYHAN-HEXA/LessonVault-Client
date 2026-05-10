// String manipulation utilities
export const stringUtils = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  truncate: (str, length) => str.length > length ? str.substring(0, length) + '...' : str,
};
