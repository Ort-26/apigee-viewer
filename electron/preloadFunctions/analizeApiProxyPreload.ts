import { ipcRenderer } from "electron";
import { IAnalizeProxyPath } from "./indexPreload";
import { ApigeeEslintTypes } from "../types/EventTypes";

export const AnalizeApi = async (): Promise<IAnalizeProxyPath> => {
    return await ipcRenderer.invoke(ApigeeEslintTypes.Analizar);
}