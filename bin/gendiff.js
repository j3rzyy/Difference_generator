#!/usr/bin/env node

import { Command } from 'commander';
import { compareData } from '../src/compare.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a diffrence')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, { format }) => {
    console.log(compareData(filepath1, filepath2, format));
  });

program.parse(program.argv);
