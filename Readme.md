# Typescript Import

Takes all files in a folder and create a single file that exports all files in the folder.

## Usage

```bash
Usage: typescriptimport [options]


create single export file of multiple files

Options:
    -i, --inputDirectory    input folder to merge into one
    -o, --outputFile        output file
    -e, --exportPath        export directory that is used as reference in the output file
    -V, --version           output the version number
```

examples:

```bash
typescriptimport --inputDirectory ./src/app/enums/separated-enums/ --outputFile ./src/app/enums/enums.ts --exportPath ./separated-enums/
```

## Like it

:star: this repo

## License

[MIT](http://opensource.org/licenses/MIT)
