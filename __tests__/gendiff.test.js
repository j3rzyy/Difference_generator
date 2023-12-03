import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { test, expect } from '@jest/globals';
import { compareData } from '../src/compare';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

// const recJSON = readFile('resultRecJSON.txt');

// test('Compare %s and %s to expect %s in "%s" style', () => {
//   expect(compareData('__fixtures__/filepath1.json', '__fixtures__/filepath2.json')).toEqual(recJSON);
// });

const cases = [['filepath1.json', 'filepath2.json', 'resultRecJSON.txt']];

test.each(cases)('Compare %s and %s to expect %s', (firstArg, secondArg, expectedResult) => {
  const firstFile = getFixturePath(firstArg);
  const secondFile = getFixturePath(secondArg);
  const getResult = readFile(expectedResult);
  const result = compareData(firstFile, secondFile);
  expect(result).toEqual(getResult);
});
