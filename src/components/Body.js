import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from '../components/Browse';
import Login from '../components/Login';
import Trailervideo from './Trailervideo';




 
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
        {
            path:"/trailervideo",
            element:<Trailervideo></Trailervideo>
        }
     ])



  return (
   <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default Body
