import * as path from 'path';
import * as fs from 'fs';
import * as xml2js from 'xml2js';
import { ipcMain } from "electron";
import { ApiproxyStruct } from "../types/EventTypes"; 
import { IApiProxyUniqueStruct } from '../types/mapApiProxyRes';
import { json } from 'react-router-dom';
import { RawProxyEndpoint } from '../types/rawXmlToJsonProxyEndpoint';

export interface IApiProxyMap {
    results: IApiProxyUniqueStruct | undefined
}

const parser = new xml2js.Parser();

ipcMain.handle(ApiproxyStruct.GenerarEsquema, async function (_,baseurl: string): Promise<IApiProxyMap> {
    //return await generarEsquemaApiProxy(baseurl)
    // return await generarEsquemaApiProxy('C:\\Users\\carlos.ortega\\Documents\\helloworld\\apiproxy')
    return await generarEsquemaApiProxy('C:\\Users\\carlos.ortega\\Documents\\retail-v1-carlos-ortega_rev18_2024_07_29\\apiproxy')
});

async function generarEsquemaApiProxy(directoryPath: string): Promise<IApiProxyMap> {
    const files = await readAllFiles(directoryPath)
    const xmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.xml');
    const proxies = filterByFolder("proxies",xmlFiles)
    const targets = filterByFolder("targets",xmlFiles)
    return new Promise((resolve, reject) => {
        const struct: IApiProxyUniqueStruct = {
            proxyEndpoint: {
                PreFlow: [],
                PostFlow: [],
                ConditionalFlow: []
            },
            targetEndpoint: {
                PreFlow: [],
                PostFlow: [],
                ConditionalFlow: []
            }
        }
        try {
            proxies.map(actualFile => {
                fs.readFile(actualFile, 'utf-8', (err,data) => {
                    if (err) {
                        console.log(err)
                        throw new Error('Read error');
                    }
                    parser.parseString(data, (err,res) => {
                        if (err) {
                            console.log(err)
                            throw new Error('Parse error');
                        }
                    
                    })

                })
            })
        } catch(e) {
            console.log(e)
            reject({results: undefined})
        }
        resolve({results: struct})
    })
}

function parseToUnique(data: RawProxyEndpoint) {

}

async function readAllFiles(path:string, arrayOfFiles: string[] = []) {
	const files = fs.readdirSync(path)
	files.forEach(file => {
		const stat = fs.statSync(`${path}\\${file}`)
		if(stat.isDirectory()){
			readAllFiles(`${path}\\${file}`, arrayOfFiles)
		}else{
			arrayOfFiles.push(`${path}\\${file}`)
		}
	}
	)
	return arrayOfFiles
}

function filterByFolder(folderName: string,arrayOfFiles: string[]): string[] {
    return arrayOfFiles.filter(x => x.includes(`\\${folderName}\\`));
}