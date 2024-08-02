
import { ASSETS_IMAGES } from "../../../assets"
import { CatalogOptionData } from "../../../components/navigationUtils/DashboardOptionComponent"
import { ROUTES } from "../../../navigation/CONSTANTS"

const UploadProxy: CatalogOptionData = {
    title:'Analizar proxy'
    ,bgColor:'' 
    ,image: ASSETS_IMAGES.APIGEE_LOGO 
    ,route: ROUTES.ANALIZAR_PROXY
    ,imageAnimation: ''
}


export const MenuDashboardOptions = [
    UploadProxy
]