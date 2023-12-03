import pkg from 'lodash';

const { sortBy, has, isPlainObject, isEqual } = pkg;

const getNodeCharact = (data1, data2) => {
  const keys = Object.keys({ ...data1, ...data2 });
  const sortedKeys = sortBy(keys); // обычный сорт
  return sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (!has(data1, key)) {
      return { type: 'add', key, val: value2 };
    }
    if (!has(data2, key)) {
      return { type: 'remove', key, val: value1 };
    }
    if (isPlainObject(value1) && isPlainObject(value2)) {
      return {
        type: 'recursion',
        key,
        children: getNodeCharact(value1, value2),
      };
    }
    if (!isEqual(value1, value2)) {
      return {
        type: 'updated',
        key,
        val1: value1,
        val2: value2,
      };
    }
    return { type: 'same', key, val: value1 };
  });
};

export default getNodeCharact;
