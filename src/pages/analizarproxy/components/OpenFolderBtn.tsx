

interface IOpenFolderBtn {
    actualFolder: string
    openFolder: () => void
    resetSearch: () => void
}

export const OpenFolderBtn: React.FC<IOpenFolderBtn> = ({actualFolder,openFolder,resetSearch}) => {
    return (
    <div className="card border-0 d-flex bg-transparent">
        <div className="d-flex w-100">    
            <div className='text-decoration-none text-white rounded-3'
            onClick={openFolder}>
                <h4  className='bg-primary p-3 card-salir '>
                    Abrir folder
                </h4>
            </div>
            <div className='text-decoration-none text-white rounded-3'
            onClick={resetSearch}>
                <h4  className='bg-danger p-3 card-salir '>
                    Reiniciar
                </h4>
            </div>
        </div>
        <p>Actual: {actualFolder}</p>
    </div>
  )
}
