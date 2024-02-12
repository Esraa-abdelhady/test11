import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contacts from './Component/Contacts/Contacts'
import Notfound from './Component/Notfound/Notfound'


let routing = createBrowserRouter([
  {path:"/" , element:<Layout/> , children:[
    {path:"about" , element:<About/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"contacts" , element:<Contacts/>},
    {path:"*" , element:<Notfound/>},
  ]}
])





export default function App() {
  return <>
  
  
  <RouterProvider router={routing}></RouterProvider>
  
  </>
}
