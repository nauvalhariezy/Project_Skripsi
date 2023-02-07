import { lazy } from 'react';

// PAGE
const HomePage = lazy (() => import('./pages/landing_page/HomePage'))
const AlatLab = lazy(() => import('./pages/landing_page/AlatLabPage'))
const Menu3 = lazy(() => import('./pages/landing_page/Menu3'))

const routes = [
  { path: '/', key: 'HomePage', exact: false, name: 'Home Page', element: <HomePage /> },
  { path: '/menu2', key: 'menu2', exact: true, name: 'Alat Lab', element: <AlatLab /> },
  { path: '/menu3', key: 'menu3', exact: true, name: 'Menu 3', element: <Menu3 /> },
];

export default routes;
