// Math utility functions
export const mathUtils = {
  round: (num, decimals) => Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals),
  average: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
  percentage: (part, whole) => (part / whole) * 100,
};
