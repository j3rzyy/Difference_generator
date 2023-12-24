import { getStylishOutput } from './stylish.js';
import { getPlainOutput } from './plain.js';

export const selectOutputFormat = (innerTree, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return getStylishOutput(innerTree);
    case 'plain':
      return getPlainOutput(innerTree);
    default:
      throw new Error('Non-existent type');
  }
};
