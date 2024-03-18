import React from 'react';
import ReactDOM from 'react-dom/client';
import Bdd from './pages/Bdd';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rotas = createBrowserRouter([
  
  {
    path: "/",
    element: <Bdd />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

reportWebVitals();