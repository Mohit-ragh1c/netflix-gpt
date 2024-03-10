import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../utils/firebase"
import {useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {

const navigate=useNavigate();
const dispatch=useDispatch();

const user=useSelector(store=>store.user);
function handlesignout(){

   signOut(auth).then(()=>{
    navigate("/");
   }).catch((e)=>
   console.log(e.message))

}


useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
      if(user){
          const {uid,email,displayName,photoURL}=user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse")
      }else{
          dispatch(removeUser());
          navigate("/")
      }
  })
  
  },[]);


  return (
    <div className="absolute  bg-gradient-to-b from-black z-10 flex justify-between w-full">
      <img  className="w-52 ml-4"   src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt=" not found"></img>

      {user && <div className="flex">
        
      <img  className=" w-20 ml-4  rounded-full" src={user.photoURL} alt=" not found" width="60px"></img>
      <button  onClick={handlesignout} className="m-5 p-2 bg-red-600 font-bold rounded-lg">
        Sign Out
      </button>
        
      </div>}
  
    </div>
  )
}

export default Header
