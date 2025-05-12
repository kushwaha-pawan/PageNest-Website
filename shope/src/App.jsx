import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import TopRated from './pages/TopRated'
import KidsWear from './pages/KidsWear'
import MensWear from './pages/MensWear'
import Electronics from './pages/Electronics'
import ErrorPage from './pages/ErrorPage'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "TopRated",
        element: <TopRated />,
      },
      {
        path: "KidsWear"  ,
        element: <KidsWear />,
      },
      {
        path: "MensWear" ,
        element: <MensWear />,
      },
      {
        path: "electronics",
        element: <Electronics />,
      },
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router = {router}></RouterProvider>
  )
}

export default App