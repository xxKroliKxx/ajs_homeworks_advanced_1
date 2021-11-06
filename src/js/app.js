export default function CharacteristicsSort(obj, order) {
  const newObj = [];
  for (const [key, value] of Object.entries(obj)) {
    newObj.push({ key, value });
  }

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
