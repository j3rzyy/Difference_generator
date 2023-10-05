import { readFileSync } from 'fs';
import has from 'lodash/has.js';

export const parseData = (filePath) => JSON.parse(readFileSync(filePath));

export const compareData = (file1, file2) => {
  const arrData1 = parseData(file1);
  const arrData2 = parseData(file2);

  const keys = [...Object.keys(arrData1), ...Object.keys(arrData2)];
  const uniqKeys = [...new Set(keys)].sort();
  const tab = ' ';

  return `{\n${uniqKeys.map((key) => {
    switch (true) {
      case (!has(arrData2, key)):
        return `${tab}- ${key}: ${arrData1[key]}\n`;
      case (!has(arrData1, key)):
        return `${tab}+ ${key}: ${arrData2[key]}\n`;
      case (arrData1[key] !== arrData2[key]):
        return `${tab}- ${key}: ${arrData1[key]}\n${tab}+ ${key}: ${arrData2[key]}\n`;
      default:
        return `${tab}${tab} ${key}: ${arrData2[key]}\n`;
    }
  }).join('')}}`;
};
