import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProductsList from "../components/products/Product.jsx";
import ClientList from "../components/client/ShowCliente.jsx"
import ShowSale from '../components/sales/ShowSale.jsx'
import AddSale from "../components/sales/AddSale.jsx";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.jsx"));
const Products = lazy(() => import("../components/products/Product.jsx"));

const About = lazy(() => import("../views/About.jsx"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/products", exact: true, element: <ProductsList /> },
      { path: "/clients", exact: true, element: <ClientList/> },
      { path: "/sales", exact: true, element: <ShowSale /> },
      { path: "/agregar-venta", exact: true, element: <AddSale /> },



      { path: "/about", exact: true, element: <About /> },     
      
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
