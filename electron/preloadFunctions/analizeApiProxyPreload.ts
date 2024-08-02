import { ipcRenderer } from "electron";
import { IMapApiProxyFromPath } from "./indexPreload";
import { ApigeeEslintTypes } from "../types/EventTypes";

export const AnalizeApi = async (): Promise<IMapApiProxyFromPath> => {
    return await ipcRenderer.invoke(ApigeeEslintTypes.Analizar);
}