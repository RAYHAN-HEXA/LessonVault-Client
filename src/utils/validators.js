// Form field validation
export const validators = {
  email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  password: (password) => password.length >= 6,
  phone: (phone) => /^\d{10}$/.test(phone),
};
