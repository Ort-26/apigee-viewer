import { Link } from 'react-router-dom'
import { ROUTES } from '../../../navigation/CONSTANTS'

const DashboardExitComponent = () => {
  return (
    <div className="card border-0 d-flex flex-row-reverse bg-transparent">
            <Link  
               className='text-decoration-none text-white rounded-3'
                to = {ROUTES.BASE_ROUTE}
            >
                <h4  className='bg-danger p-3  card-salir '>
                    Salir
                </h4>
            </Link>
    </div>
  )
}

export default DashboardExitComponent