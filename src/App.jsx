import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './pages/Home.jsx'
import ShowWorkouts from './pages/workouts/ShowWorkouts.jsx'
import AddWorkout from './pages/workouts/AddWorkout.jsx'
import Profile from './pages/profile/Profile.jsx'
import EditProfile from './pages/profile/EditProfile.jsx'

function App() {

  const router = createBrowserRouter([
    {path: "/register", element: <Register />},
    {path: "/login", element: <Login />},
    {path: "/", element: <Home />},
    {path: "/workouts/:uid/adicionar", element: <AddWorkout />},
    {path: "/workouts/:uid", element:<ShowWorkouts />},
    {path: "/profile/:uid", element:<Profile />},
    {path: "/profile/:uid/edit", element:<EditProfile />}
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
