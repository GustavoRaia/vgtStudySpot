import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bdd from './pages/Bdd';
import Quiz from './pages/Quiz';

const rotas = createBrowserRouter([
  
  {
    path: "/",
    element: <Bdd />
  },
  {
    path: "/quiz",
    element: <Quiz />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

reportWebVitals();