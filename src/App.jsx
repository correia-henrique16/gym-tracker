import './styles/App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './pages/Home.jsx'
import AddWorkout from './pages/workouts/AddWorkout.jsx'

function App() {

  const router = createBrowserRouter([
    {path: "/register", element: <Register />},
    {path: "/login", element: <Login />},
    {path: "/", element: <Home />},
    {path: "/adicionar/:uid", element: <AddWorkout />}
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
