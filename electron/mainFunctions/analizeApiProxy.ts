import { dialog, ipcMain } from "electron";
import { exec } from 'child_process';
import { ApigeeEslintTypes } from "../types/EventTypes";
import * as path from 'path' 
import { IApigeelintRes } from "../types/apigeelintResponse";

export interface AnalizeProxyPathRes {
    results: IApigeelintRes[] | undefined
}

ipcMain.handle(ApigeeEslintTypes.Analizar, async function () {
    return await analizeProxyPath()
});

async function analizeProxyPath(): Promise<AnalizeProxyPathRes> {
    const {canceled, filePaths} = await dialog.showOpenDialog({
        properties: ['openDirectory']
    });
    if (canceled || filePaths === undefined) {
        const res = {
            results: undefined
        }
        return res;
    }

    try {
        const resApi = await apigeeLintAnalyze(filePaths[0])
        return new Promise((resolve) => {
            const res: AnalizeProxyPathRes = {
                results: JSON.parse(resApi)
            }
            resolve(res);
        });
    } catch (error) {
        const res = {
            results: undefined
        }
        return res;
    }
}

async function apigeeLintAnalyze(source: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const apigeelintPath = path.join(__dirname, 'node_modules','apigeelint','cli.js');
        const command = `node ${apigeelintPath} -s ${source} -f json.js`;
        console.log(command)
            exec(command, (error, stdout, stderr) => { 
                if (error) {
                    if (error.code === 1) { 
                      resolve(stdout);
                    } else { 
                      reject(error);
                    }
                  } else { 
                    resolve(stdout);
                  }
            });
    });
}