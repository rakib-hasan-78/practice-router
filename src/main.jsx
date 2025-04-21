import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './components/Pages/Home';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)
//** */ https://countriesnow.space/api/v0.1/countries
