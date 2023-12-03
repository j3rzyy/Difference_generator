import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { test, expect } from '@jest/globals';
import { compareData } from '../src/compare';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const cases = [['filepath1.json', 'filepath2.json', 'resultRecJSON.txt']];

test.each(cases)(
  'Compare %s and %s to expect %s',
  (firstArg, secondArg, expectedResult) => {
    const firstFile = getFixturePath(firstArg);
    const secondFile = getFixturePath(secondArg);
    const getResult = readFile(expectedResult);
    const result = compareData(firstFile, secondFile);
    expect(result).toEqual(getResult);
  }
);
