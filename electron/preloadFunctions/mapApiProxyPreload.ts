import { ipcRenderer } from "electron";
import { ApiproxyStruct } from "../types/EventTypes";
import { IApiProxyMap } from "../mainFunctions/mapApiProxy";

export const MapApiProxy = async (src: string): Promise<IApiProxyMap> => {
    return await ipcRenderer.invoke(ApiproxyStruct.GenerarEsquema,src);
}