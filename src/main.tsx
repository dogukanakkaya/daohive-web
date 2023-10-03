import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/layout'
import Home from './pages/home'
import Docs from './pages/docs'
import Doc from './pages/docs/[id].tsx'
import Proposals from './pages/proposals'
import Proposal from './pages/proposals/[id].tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MetamaskProvider } from './hooks/useMetamask'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/docs',
        element: <Docs />,
        children: [
          {
            path: '/docs/:id',
            element: <Doc />
          }
        ]
      },
      {
        path: '/proposals',
        element: <Proposals />
      },
      {
        path: '/contracts/:address/proposals/:id',
        element: <MetamaskProvider><Proposal /></MetamaskProvider>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
