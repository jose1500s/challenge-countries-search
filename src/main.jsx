import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx';
import Details from './pages/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/details/:countryName',
        element: <Details />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
 
)
