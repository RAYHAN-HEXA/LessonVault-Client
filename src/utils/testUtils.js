// Testing utility helpers
export const testUtils = {
  waitFor: (callback) => new Promise(resolve => setTimeout(() => resolve(callback()), 100)),
  mockData: {},
};
