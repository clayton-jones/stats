export const parseDate = (dateString: string): Date => {
  const parts = dateString.split('/').map((val: string): number => {
    return parseInt(val);
  });

  return new Date(parts[2], parts[1] - 1, parts[0]);
};
