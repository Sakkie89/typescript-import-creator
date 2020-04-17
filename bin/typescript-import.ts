#! /usr/bin/env node

'use strict';

const app = require('commander')
const cfg = require('../package.json');
const typescriptimport = require('../index');
const path = require('path');

app
  .option('-i, --inputDirectory <inputDirectory>', 'The directory containing all the input files')
  .option('-o, --outputFile <outputFile>', 'The name and location of the file to create')
  .option('-e, --exportPath <exportPath>', 'The name of the directory to use inside the file to be created')
  .version(cfg.version)
  .description(cfg.description)
  // .action(() => {
  //   console.log('inputDirectory: %s outputFile: %s exportPath: %s',
  //     app.inputDirectory, app.outputFile, app.exportPath);
  // })
  .parse(process.argv);


if (!!!app.inputDirectory) {
  // console.log('no input');
  throw new Error('no input folder specified')
} else if (!!!app.outputFile) {
  // console.log('no output');
  throw new Error('no output file specified')
} else {
  typescriptimport(app.inputDirectory, app.outputFile, app.exportPath).then((filename: string) =>
    console.log('file created successfully: ', filename)
  ).catch ((err: any) => {
    console.error(err);
  });
}