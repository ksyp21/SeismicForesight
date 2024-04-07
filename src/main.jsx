import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Form from './Components/Form/Form'
import Signup from './Components/Signup/Signup'


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [{
      path: "",
      element: <Home />,
    }, 
    ]
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Form />
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
