import * as path from 'path';
import * as fs from 'fs';
import * as xml2js from 'xml2js';
import { ipcMain } from "electron";
import { ApiproxyStruct } from "../types/EventTypes";
import { IApiProxyStruct } from "../types/mapApiProxyRes";

export interface IApiProxyMap {
    results: IApiProxyStruct[] | undefined
}


ipcMain.handle(ApiproxyStruct.GenerarEsquema, async function (_,baseurl: string): Promise<IApiProxyMap> {
    return await generarEsquemaApiProxy(baseurl)
});

async function generarEsquemaApiProxy(directoryPath: string): Promise<IApiProxyMap> {
    const parser = new xml2js.Parser();
    //Analizar directorio de proxies
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                reject(`Failed to read directory: ${err.message}`);
                return;
            }

            const xmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.xml');
            const jsonPromises = xmlFiles.map(file => {
                return new Promise((resolveJson, rejectJson) => {
                    const filePath = path.join(directoryPath, file);
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            rejectJson(`Failed to read file ${file}: ${err.message}`);
                            return;
                        }

                        parser.parseString(data, (err, result) => {
                            if (err) {
                                rejectJson(`Failed to parse XML file ${file}: ${err.message}`);
                                return;
                            }
                            // Type assertion to Root if you know the exact structure
                            resolveJson({ file: file, json: result as IApiProxyStruct });
                        });
                    });
                });
            });

            Promise.all(jsonPromises)
                .then(results => resolve(results))
                .catch(error => reject(`Error converting files: ${error}`));
        });
    });
}
