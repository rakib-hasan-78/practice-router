import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Users from './components/Pages/Users';
import Detail from './components/Component/Detail/Detail';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <div>error 404!</div>,
    children: [
  {
    path: '/about', // ✅ relative path
    element: <About />
  },
  {
   path:'/users',
   loader: ()=> fetch('https://restcountries.com/v3.1/all').then(res => res.json()),
   element: <Users />
  },
  {
    path:'/users/:code',
    loader: ({params})=>fetch(`https://restcountries.com/v3.1/alpha/${params.code}`).then(res => res.json()).then(data => data[0]),
    element: <Detail />,
  }
]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)

