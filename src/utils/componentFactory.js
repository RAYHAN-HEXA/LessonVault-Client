// Component factory helper
export const createComponent = (name, component) => {
  component.displayName = name;
  return component;
};
