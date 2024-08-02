import { DashboardOptionComponent } from "../../components/navigationUtils/DashboardOptionComponent"
import DashboardExitComponent from "./components/DashboardExitComponent"
import { MenuDashboardOptions } from "./components/MenuDashboardData"

export const DashboardPage = () => {
    return (
        <>
        <h1 className='text-white text-center pt-4 pb-5'>Panel principal</h1>
        <div className="container"> 
          <div className='row'>
                {
                  MenuDashboardOptions.map((entry,id) => 
                    <DashboardOptionComponent 
                        key={id}
                        title={entry.title} 
                        bgColor={entry.bgColor} 
                        image={entry.image} 
                        route={entry.route}  
                        imageAnimation={entry.imageAnimation}
                        /> 
                  )
                }
          </div>
          <section className="my-3 fixed-bot-right-position " >
                <DashboardExitComponent />
          </section>
        </div>
        </>
      )
}
