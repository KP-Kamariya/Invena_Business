import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import App from './App.jsx'


import{
  createBrowserRouter,
  RouterProvider,
}from "react-router";


import Home from './Files/Home.jsx'
import About from './Files/About.jsx'
import Blog from './Files/Blog.jsx'
import Contact from './Files/Contact.jsx'
import Service from './Files/Service.jsx'
import Navbar from './Reusefiles/Navbar.jsx'
import Cardsdetails from './Files/Cardsdetails.jsx'

let allrouter = createBrowserRouter ([
  {
    path: '/',
    element:<Home></Home>
  },
  {
    path:'about',
    element:<About></About>
  },
  {
    path:'blog',
    element:<Blog></Blog>
  },
  {
    path:'contact',
    element:<Contact></Contact>
  },
  {
    path:'service',
    element:<Service></Service>
  },
   {
    path:'service/:id',
    element:<Cardsdetails></Cardsdetails>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allrouter}/>
    {/* <App /> */}
    {/* <Navbar/> */}
  </StrictMode>,
)
