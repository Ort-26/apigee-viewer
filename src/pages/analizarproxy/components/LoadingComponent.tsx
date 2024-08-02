import './styles.css'

export const LoadingComponent = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center loading flex-column card-animation-fadein">
        <div className="spinner-border ml-auto loading-content" role="status" aria-hidden="true" />
        <h4 className='m-3 text-white loading-content'>Analizando con eslint... </h4>
      </div>
    </>
  )
}