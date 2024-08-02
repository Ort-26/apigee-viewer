import { ipcRenderer } from "electron";
import { ApigeeEslintTypes } from "../types/EventTypes";
import { AnalizeProxyPathRes } from "../mainFunctions/analizeApiProxy";

export const AnalizeApi = async (): Promise<AnalizeProxyPathRes> => {
    return await ipcRenderer.invoke(ApigeeEslintTypes.Analizar);
}