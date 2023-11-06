import parse from './parsers.js';
import getNodeCharact from './buildTree.js';
import getRecurTree from './recursiveRepresent.js'

export default (file1, file2) => {
  const data1 = parse(file1); // извлекаем данные из первого файла в виде object
  const data2 = parse(file2); // извлекаем данные из второго файла в виде object
  // eslint-disable-next-line max-len
  const innerTree = getNodeCharact(data1, data2); // innerTree - массив вложенных объектов с информациейй о каждом узле
  return getRecurTree(innerTree);
};
