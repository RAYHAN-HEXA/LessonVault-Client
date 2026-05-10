// Retry helper for failed operations
export const retry = async (fn, maxAttempts = 3) => {
  for (let i = 0; i < maxAttempts; i++) {
    try { return await fn(); }
    catch (e) { if (i === maxAttempts - 1) throw e; }
  }
};
