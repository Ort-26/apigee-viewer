import React from 'react'
import { ASSETS_IMAGES } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../navigation/CONSTANTS';

const DashboardCardSettingsComponent: React.FC = () => {
    const naviator = useNavigate();
    const handleConfig = () => {
        naviator(ROUTES.MENU_CONFIG);
    }
  return (
    <div className="card p-0 bg-secondary settings-parent-card card-zoom" onClick={handleConfig}>
        <div className="card-body p-2">
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-row">
                <div className='img-settings align-items-center d-flex'>
                    <img className='img-settings-spin img-fluid' src={ASSETS_IMAGES.GEAR} />
                </div>
                <div className='p-2'>
                    <h4>Configuración</h4>
                    <p className="mb-0">Cambiar configuración de la aplicación</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DashboardCardSettingsComponent