const omit = <T extends Record<PropertyKey, unknown>, F extends (keyof T)[]>(
  obj: T,
  props: F
): Omit<T, F[number]> => {
  const newObj = { ...obj };
  props.forEach((prop) => delete newObj[prop]);
  return newObj;
};

export default omit;
export { omit };
