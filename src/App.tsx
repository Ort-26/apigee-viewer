import { HashRouter } from 'react-router-dom'
import { RouterConfig } from './navigation/RouterConfig'
import './styles/bootstrap.min.css'
import './styles/animations.css'
import './styles/customstyles.css'

function App() {
  return (
    <>
      <HashRouter>
        <RouterConfig />
      </HashRouter>
    </>
  )
}

export default App
