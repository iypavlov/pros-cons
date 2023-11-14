import React from 'react'
import './assets/styles/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Tickets } from './pages/Tickets/Tickets'
import { Home } from './pages/Home/Home'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tickets',
        element: <Tickets />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
