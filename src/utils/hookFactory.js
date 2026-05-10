// Custom hook factory
export const createHook = (name, hook) => {
  hook.displayName = `use${name}`;
  return hook;
};
