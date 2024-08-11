export const splitArray = (arr: any[], splitCount: number) => {
  const currList = arr.slice(0, splitCount);
  const restList = arr.slice(splitCount);

  return { currList, restList };
};
