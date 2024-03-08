import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from '../components/Browse';
import Login from '../components/Login';
import {onAuthStateChanged} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {auth} from "../utils/firebase"

 
const Body = () => {

    const dispatch=useDispatch();

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

useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
    if(user){
        const {uid,email,displayName,photoURL}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    }else{
        dispatch(removeUser());
    }
})

},[]);

  return (
   <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default Body
