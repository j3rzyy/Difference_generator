import parseData from './parsers.js';
import has from 'lodash/has.js';

export const compareData = (file1, file2) => {
  const Data1 = parseData(file1);
  const Data2 = parseData(file2);

  // console.log(typeof Data1);
  // console.log();
  // console.log(Data2);

  const keys = [];
  for (let key in Data1) {
    keys.pu
  }

  // const keys = [...Object.keys(Data1), ...Object.keys(Data2)];
  // console.log(keys);
  const uniqKeys = [...new Set(keys)].sort();
  const tab = ' ';

  return `{\n${uniqKeys.map((key) => {
    switch (true) {
      case (!has(Data2, key)):
        return `${tab}- ${key}: ${Data1[key]}\n`;
      case (!has(Data1, key)):
        return `${tab}+ ${key}: ${Data2[key]}\n`;
      case (Data1[key] !== Data2[key]):
        return `${tab}- ${key}: ${Data1[key]}\n${tab}+ ${key}: ${Data2[key]}\n`;
      default:
        return `${tab}${tab} ${key}: ${Data2[key]}\n`;
    }
  }).join('')}}`;
};
