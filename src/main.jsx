import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)