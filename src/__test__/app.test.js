import sort from '../js/app';

const example = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('sort1 test', () => {
  const r = sort(example, []);
  const equal = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(r).toEqual(equal);
});

test('sort2 test', () => {
  const r = sort(example, ['name', 'level']);
  const equal = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(r).toEqual(equal);
});
