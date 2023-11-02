import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.min.css';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
  <Suspense fallback={<Loader />}>

    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
  </React.StrictMode>
);


reportWebVitals();
