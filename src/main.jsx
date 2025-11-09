import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout'
import AuthProvider from './Provider/AuthProvider'
import Loading from './Components/Loading'
import HomePage from './Pages/HomePage'
import AddCarPage from './Pages/AddCarPage'
import MyListingPage from './Pages/MyLIstingPage'
import BrowseCarPage from './Pages/BrowseCarPage'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'

import CarDetails from './Pages/CarDetails'
import MyBookings from './Pages/MyBookings'
import ErrorPage from './Pages/ErrorPage'




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/newest-cars'),
        element: <HomePage></HomePage>
      },
      {
        path: 'add_car',
        element: <AddCarPage></AddCarPage>
      },
      {
        path: 'my_listing',
        element: <MyListingPage></MyListingPage>
      },
      {
        path: 'my_bookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: 'browse_cars',
        loader: () => fetch('http://localhost:3000/all_cars'),
        element: <BrowseCarPage></BrowseCarPage>
      },
      {
        path: "/carDetails/:id",
        loader: ({params}) => fetch(`http://localhost:3000/all_cars/${params.id}`),
        element: <CarDetails></CarDetails>
      },
      {
        path: 'login',
        element: <LoginPage></LoginPage>
      },
      {
        path: 'register',
        element: <RegistrationPage></RegistrationPage>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
