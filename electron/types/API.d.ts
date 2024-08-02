import { IAnalizeProxyPath } from "../preloadFunctions/indexPreload"

export {}

interface API {
    AnalizeProxyPath: IAnalizeProxyPath
}


declare global {
    interface Window {
        API: API
    }
}