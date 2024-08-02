import { useState } from "react"
import { VolverComponent } from "../../components/navigationUtils/VolverComponent"
import { LoadingComponent } from "./components/LoadingComponent"
import { OpenFolderBtn } from "./components/OpenFolderBtn";
import { ApigeeLintServices } from "../../services/apigeelintServices";
import { AnalizeProxyPathRes } from "../../../electron/mainFunctions/analizeApiProxy";
import { ResultsTableComponent } from "./components/ResultsTableComponent";


export const AnalizarProxyPage = () => {
  const [actualPhase, setActualPhase] = useState<number>(0);
  const [eslintResults,setEslintResults] = useState<AnalizeProxyPathRes | undefined>(undefined);
  const [actualFolder,setActualFolder] = useState<string>('');

  const openFolder = async () => {
    setActualPhase(1)
    const res:AnalizeProxyPathRes = await ApigeeLintServices.AnalizarApiProxy();
    if (res === undefined) {
      setActualPhase(0)
    } else {
      setEslintResults(res)
      setActualFolder(res.baseurl)
      setActualPhase(2)
    } 
  } 

  const reset = () => {
    setEslintResults(undefined);
    setActualFolder('');
  }

  return (
    <>
    <h1 className='text-white text-center pt-4 pb-5'>Analizar proxy</h1>
    <div className="container"> 
        <div className='row'>
          <OpenFolderBtn 
            openFolder={openFolder}
            actualFolder={actualFolder}
            resetSearch={reset}
          />
          {actualPhase === 1 && <LoadingComponent />}
          {actualPhase === 2 && <ResultsTableComponent data={eslintResults} />}
        </div>
    <VolverComponent />
    </div>
    </>
  )
}
