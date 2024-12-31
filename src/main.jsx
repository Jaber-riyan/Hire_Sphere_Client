import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import 'animate.css';
import Authentication from './Authentication/Authentication'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router}></RouterProvider>
    </Authentication>
  </StrictMode>
)
