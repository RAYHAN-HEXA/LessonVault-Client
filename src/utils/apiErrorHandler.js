// API error handling utilities
export const handleApiError = (error) => {
  if (error.response) {
    return error.response.data.message || 'An error occurred';
  }
  return 'Network error';
};
