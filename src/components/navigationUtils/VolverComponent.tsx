import { useNavigate } from 'react-router-dom'

export const VolverComponent = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(-1);
    }
  
    return (
    <div className="card border-0 d-flex flex-row-reverse bg-transparent"
            >
        <div
       className='text-decoration-none text-white rounded-3'
       onClick={handleNavigation}>
            <h4  className='bg-danger p-3 card-salir '>
                Volver
            </h4>
        </div>
    </div>
  )
}
