import { readFileSync } from 'fs';
import { basename, extname, dirname } from 'path';
import yaml from 'js-yaml';

export default (filePath) => {
  switch (extname(filePath)) {
    case '.json':
      return JSON.parse(readFileSync(filePath));
    case '.yaml':
      return yaml.load(readFileSync(filePath));
    case '.yml':
      return yaml.load(
        readFileSync(`${dirname(filePath)}/${basename(filePath, '.yml')}.yaml`)
      );
    default:
      throw new Error(`File extension '${extname(filePath)}' not supported!`);
  }
};
