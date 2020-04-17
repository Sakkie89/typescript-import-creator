import { readFile, readdir, writeFile, statSync } from 'fs'
import { resolve, join } from 'path'

// const isFile = (f: string) => statSync(f).isFile();

const write = (fName: string, str: string) => new Promise<void>((res, rej) => {
    writeFile(resolve(fName), str, (err: Error) => {
        if (err) {
            return rej(err)
        }
        return res()
    })
});

const readFolder = (folder: string) => new Promise<string[]>((res, rej) => {
    readdir(resolve(folder), (err, files) => {
        if (err) {
            rej(err)
        }
        const fileList: string[] = []
        files.forEach(file => {
            if (statSync(join(folder, file)).isFile()) {
                fileList.push(file);
            }
        });
        console.log('Files found: ', fileList);
        res(fileList);
    })
});

export = (inputDirectory: string, outputFile: string, exportPath: string) => new Promise((res, rej) => {

    let fileContent = '';

    readFolder(inputDirectory).then(fileNames => {
        fileNames.forEach(name => {
            fileContent += 'export * from \'' + (!!exportPath ? exportPath : inputDirectory) + name.substr(0, name.length - 3) + '\';\n'
        });
        write(outputFile, fileContent).then(() => {
            return res(outputFile);
        });
    })
});