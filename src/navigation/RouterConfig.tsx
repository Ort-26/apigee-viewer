import {Routes, Route} from 'react-router-dom';
import { DashboardPage } from '../pages/home/DashboardPage';
import { ROUTES } from './CONSTANTS';
import { AnalizarProxyPage } from '../pages/analizarproxy/AnalizarProxyPage';

export const RouterConfig = () => {
  return (
    <Routes>
        <Route path={ROUTES.BASE_ROUTE} Component={DashboardPage} />
        <Route path={ROUTES.ANALIZAR_PROXY} Component={AnalizarProxyPage} />
    </Routes>
  )
}
