import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Model from './pages/Model.jsx';
import Home from './pages/Home.jsx';
import ModelDetail from './pages/ModelDetail.jsx';
import Contact from './pages/Contact.jsx';
import Accessories from './pages/Accessories.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/model",
        element: <Model />,
      },
      {
        path:"/model/detail",
        element:<ModelDetail />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/accessories",
        element:<Accessories />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
