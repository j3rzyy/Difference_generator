import parse from './parsers.js';
import getNodeCharact from './buildTree.js';
import getRecurTree from './recursiveRepresent.js';

export const compareData = (filePath1, filePath2) => {
  const data1 = parse(filePath1); // извлекаем данные из первого файла в виде object
  const data2 = parse(filePath2);
  const innerTree = getNodeCharact(data1, data2);
  return getRecurTree(innerTree);
};
