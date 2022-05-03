let lastId = 0;
export const uuid = (prefix = "id") => {
  lastId++;
  return `${prefix}${lastId}`;
};
