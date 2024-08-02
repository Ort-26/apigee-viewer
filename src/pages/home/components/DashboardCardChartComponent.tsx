import React from 'react'
import './styles.css'
import LineChart from '../../../components/charts/LineChart'
import { LineChartComponent } from '../../../types/Charts/LineChartModel';
import { useNavigate } from 'react-router-dom';

interface DashboardPage {
  title: string;
  description: string;
  lineChartData: LineChartComponent;
  bootstrapColor: string;
  urlTarget: string;
}

//bg-white
const DashboardCardChartComponent: React.FC<DashboardPage> = ({title,description,lineChartData,bootstrapColor,urlTarget}) => {
  const navigator = useNavigate();
  const CardChartStyle = "card mb-3 dashboard-card card-zoom " + bootstrapColor;
 
  const handleRedirect = () => {
    navigator(urlTarget);
  }

  return (
    <div className='col-lg-4 col-md-6 mb-2 ' onClick={handleRedirect}>
    <div className= {CardChartStyle}> 
      <h3 className='card-header text-center'>{title}</h3>
      <div className='card-body'>
        <h5 className='card-title'>Resumen de los últimos 5 dias</h5>
      </div>
      <div>
        <LineChart lineChart={lineChartData}  />
      </div>
      <div className='card-footer text-muted'>
        {description}
      </div>
  </div>
  </div>
  )
}

export default DashboardCardChartComponent;

