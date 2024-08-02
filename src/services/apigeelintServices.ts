import { AnalizeProxyPathRes } from "../../electron/mainFunctions/analizeApiProxy";

const AnalizarApiProxy = async (): Promise<AnalizeProxyPathRes> => {
    return await window.API.AnalizeProxyPath.AnalizeApi();
}

export const ApigeeLintServices = {
    AnalizarApiProxy
}