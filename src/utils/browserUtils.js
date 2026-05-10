// Browser detection and utilities
export const browserUtils = {
  isMobile: () => /Mobile|Android|iPhone/.test(navigator.userAgent),
  isDarkMode: () => window.matchMedia('(prefers-color-scheme: dark)').matches,
};
