const cleanId = (defaultId: string | Number): number => {
  return +defaultId.toString();
};

export default cleanId;
