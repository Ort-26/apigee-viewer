import React from 'react'
import { useNavigate } from 'react-router-dom';

export interface CatalogOptionData {
    title: string;
    bgColor: string;
    image: string;
    imageAnimation: string;
    route: string;
}

export const DashboardOptionComponent: React.FC<CatalogOptionData> = ({title,bgColor,image,route,imageAnimation}) => {
  const navigator = useNavigate()
  const handleRedirect = () => {
    navigator(route);
  }
    const theme = "card settings-parent-card card-zoom " + bgColor;
    return (
    <div className='col-md-3 mb-4 cards-animation-stepin' onClick={handleRedirect}>
    <div className={theme}>
      <div className='card-body align-items-center'>
        <div className='d-flex'>
            <img className={'w-100 '+imageAnimation} src={image}/>
        </div>
        <h5 className='card-title text-center pt-4'>{title}</h5>
      </div>
    </div>
    </div>
  )
}
