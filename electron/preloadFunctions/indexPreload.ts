import { contextBridge } from "electron"; 
import { AnalizeApi } from "./analizeApiProxyPreload";
import { MapApiProxy } from './mapApiProxyPreload'
import { IApiProxyMap } from "../mainFunctions/mapApiProxy";
import { AnalizeProxyPathRes } from "../mainFunctions/analizeApiProxy";

export interface IAnalizeProxyPath {
    AnalizeApi: () => Promise<AnalizeProxyPathRes>
}

export interface IMapApiProxyFromPath {
    MapApiProxy: (src: string) => Promise<IApiProxyMap>
}

const AnalizeProxyPath: IAnalizeProxyPath = {
    AnalizeApi: AnalizeApi,
}

const MapApiProxyFromPath: IMapApiProxyFromPath = {
    MapApiProxy: MapApiProxy
}

contextBridge.exposeInMainWorld("API",{
    AnalizeProxyPath,
    MapApiProxyFromPath
})