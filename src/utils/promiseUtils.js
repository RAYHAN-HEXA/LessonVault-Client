// Promise helper utilities
export const promiseUtils = {
  timeout: (promise, ms) => Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]),
  all: (promises) => Promise.all(promises),
};
