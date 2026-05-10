// Security and sanitization utilities
export const securityUtils = {
  sanitizeHtml: (html) => html.replace(/<script[^>]*>.*?<\/script>/gi, ''),
};
