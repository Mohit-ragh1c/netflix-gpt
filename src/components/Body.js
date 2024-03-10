import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from '../components/Browse';
import Login from '../components/Login';



 
const Body = () => {

     const appRouter=createBrowserRouter([
         {
             path:"/",
             element:<Login></Login>,
         },
        {
            path:"/browse",
            element:<Browse></Browse>,
        },
     ])



  return (
   <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default Body
