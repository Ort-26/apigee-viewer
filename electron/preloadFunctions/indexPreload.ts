import { contextBridge } from "electron";
import { AnalizeProxyPathRes } from "../mainFunctions/analizeApiProxy";
import { AnalizeApi } from "./analizeApiProxyPreload";

export interface IAnalizeProxyPath {
    AnalizeApi: () => Promise<AnalizeProxyPathRes>
}

const AnalizeProxyPath: IAnalizeProxyPath = {
    AnalizeApi: AnalizeApi
}

contextBridge.exposeInMainWorld("API",{
    AnalizeProxyPath,
})