import { IAnalizeProxyPath } from "../preloadFunctions/indexPreload"

export {}

interface API {
    AnalizeProxyPath: IAnalizeProxyPath
    MapApiProxyFromPath: IMapApiProxyFromPath
}


declare global {
    interface Window {
        API: API
    }
}