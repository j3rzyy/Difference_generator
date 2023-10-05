import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const parseData = (filePath) => {
    switch (path.extname(filePath)) {
        case '.json':
            return JSON.parse(readFileSync(filePath));
        case '.yaml':
            return yaml.load(readFileSync(filePath));
        default:
            throw new Error('Unsupported file extension!');
    }
};

