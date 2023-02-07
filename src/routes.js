import { lazy } from "react";

// PAGE
const HomePage = lazy(() => import("./pages/landing_page/HomePage"));
const AlatLab = lazy(() => import("./pages/landing_page/AlatLabPage"));
const LabPage = lazy(() => import("./pages/landing_page/LabPage"));
const LoginPage = lazy(() => import("./pages/landing_page/LoginPage"));

const routes = [
  {
    path: "/",
    key: "HomePage",
    exact: false,
    name: "Home Page",
    element: <HomePage />,
  },
  {
    path: "/alatlab",
    key: "alatlab",
    exact: true,
    name: "Alat Lab",
    element: <AlatLab />,
  },
  {
    path: "/labpage",
    key: "labpage",
    exact: true,
    name: "Laboratorium",
    element: <LabPage />,
  },
  {
    path: "/loginpage",
    key: "loginpage",
    exact: true,
    name: "Login Page",
    element: <LoginPage />,
  },
];

export default routes;
