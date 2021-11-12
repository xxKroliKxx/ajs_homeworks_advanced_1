export default function CharacteristicsSort(obj, order) {
  const newObj = [];
  const entries = Object.entries(obj);
  /* eslint-disable guard-for-in */
  for (const index in entries) {
    const key = entries[index][0];
    const value = entries[index][1];
    newObj.push({ key, value });
  }
  /* eslint-enable */
  const f = (a, b) => {
    const indexA = order.indexOf(a.key);
    const indexB = order.indexOf(b.key);
    if (indexA === -1 && indexB === -1) {
      return a.key > b.key ? 1 : -1;
    }
    if (indexA !== -1 && indexB === -1) {
      return -1;
    } if (indexA === -1 && indexB !== -1) {
      return 1;
    }
    return indexA - indexB;
  };

  newObj.sort(f);

  return newObj;
}
