import { Outlet } from 'react-router-dom'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './pages/home/Home.jsx'
import ShowExercises from './pages/home/ShowExercises.jsx'
import AddWorkout from './pages/workouts/AddWorkout.jsx'
import Profile from './pages/profile/Profile.jsx'
import EditProfile from './pages/profile/EditProfile.jsx'
import ShowWorkouts from './pages/workouts/ShowWorkouts.jsx'
import UserProvider from './context/UserContext.jsx'
import DbProvider from './context/DbContext.jsx'
import EditWorkout from './pages/workouts/EditWorkout.jsx'


const RootLayout = () => {
  return(
    <UserProvider>
      <DbProvider>
        <Outlet/>
      </DbProvider>
    </UserProvider>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {path: "/register", element: <Register />},
        {path: "/login", element: <Login />},
        {path: "/", element: <Home />},
        {path: "/exercises", element: <ShowExercises />},
        {path: "/workouts/:exId/adicionar", element: <AddWorkout />},
        {path: "/workouts/:wktId/editar", element: <EditWorkout />},
        {path: "/workouts/:exId", element:<ShowWorkouts />},
        {path: "/profile", element:<Profile />},
        {path: "/profile/edit", element:<EditProfile />}
      ]
    }
    
  ])

  return (
      <RouterProvider router={router}/>
  )
}

export default App
