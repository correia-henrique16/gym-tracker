import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './pages/home/Home.jsx'
import ShowExercises from './pages/home/ShowExercises.jsx'
import AddWorkout from './pages/workouts/AddWorkout.jsx'
import Profile from './pages/profile/Profile.jsx'
import EditProfile from './pages/profile/EditProfile.jsx'
import ShowWorkouts from './pages/workouts/ShowWorkouts.jsx'

function App() {

  const router = createBrowserRouter([
    {path: "/register", element: <Register />},
    {path: "/login", element: <Login />},
    {path: "/", element: <Home />},
    {path: "/exercises", element: <ShowExercises />},
    {path: "/workouts/adicionar", element: <AddWorkout />},
    {path: "/workouts/:exId/:exNome", element:<ShowWorkouts />},
    {path: "/profile", element:<Profile />},
    {path: "/profile/edit", element:<EditProfile />}
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
