import { useNavigate } from "react-router-dom";
import { DashboardCard } from "../../../types/DashboardCardsOptions";



const DashboardCardOptionComponent:React.FC<DashboardCard> = ({config}) => {
    const naviator = useNavigate();
    const handleConfig = () => {
        naviator(config.urlTarget);
    }
    const theme = "card p-0 bg-secondary settings-parent-card card-zoom " + config.bootColor;
    const animation = "img-fluid " + config.bootAnimation
  return (
    <div className={theme} onClick={handleConfig}>
    <div className="card-body p-2">
    <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
            <div className='img-settings align-items-center d-flex'>
                <img className={animation} src={config.image} />
            </div>
            <div className='p-2'>
                <h4>{config.title}</h4>
                <p className="mb-0">{config.subtitle}</p>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default DashboardCardOptionComponent