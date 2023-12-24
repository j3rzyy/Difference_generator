import parse from './parsers.js';
import { getTree } from './buildTree.js';
import { selectOutputFormat } from './formatters/format.js';

export const compareData = (filePath1, filePath2, format) => {
  const data1 = parse(filePath1); // извлекаем данные из первого файла в виде object
  const data2 = parse(filePath2);
  const innerTree = getTree(data1, data2);
  return selectOutputFormat(innerTree, format);
};
