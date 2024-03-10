import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import React, { useRef, useState } from 'react'
import Header from './Header'
import {auth} from "../utils/firebase";
import {checkvaliddata} from "../utils/validate"
import {  useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";


const Login = () => {
  const dispatch=useDispatch();
    const [issign,setissign]=useState(true);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const[iscurrect,setiscurrect]=useState("");
    const navigate=useNavigate();
 

    function toggleform(){
      setissign(!issign);  
    }

    async function submithandeler(){
        const result=checkvaliddata(email.current.value,password.current.value);
        setiscurrect(result);
        
        if(result) return;
    

        if(!issign){
   //sign up
      await createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
       .then((userCredential)=>{
        const user=userCredential.user;

        updateProfile(user,{
          displayName:name.current.value,
          photoURL: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
        }).then(()=>{

          const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

        }).catch((e)=>{
          console.log("error in updating user profile");
        })
  
       })
       .catch((e)=>{
        const errorcode=e.code;
        const errormessage=e.message;
        setiscurrect(errorcode + " - "+ errormessage);
       })

        }
        else{
          //sign in
        await signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
          const user=userCredential.user;
          
        })
        .catch((e)=>{
          console.log(e);
          setiscurrect(e.message);
        })
        }
      }

  return (
    <div>
    <Header></Header>
    <div className="absolute w-[100%] h-[100vh]">
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt=" not found "></img>
     </div>
     <form className="absolute ml-[400px] mt-52 p-10 w-5/12 bg-black rounded-md flex-row justify-center align-middle bg-opacity-70" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="text-white  font-bold m-2">
            {issign ? "sign in" :" sign up"}
        </h1>
      
       {!issign && 
       <input type='text'  ref ={name} placeholder='Enter your name ' className="p-2 m-2 w-full rounded-r-md bg-gray-800 text-white"></input>
       }
        <input   type='email' ref={email} onChange={()=>setiscurrect("")} placeholder=' Email ' className="p-2 m-2 w-full rounded-r-md bg-gray-800 text-white"></input>
        
        <input type='password' ref={password} placeholder='password' className="p-2 m-2 w-full rounded-md bg-gray-800 text-white"></input>
       
       <p className="text-white font-bold text-red-700">{iscurrect}</p>
        
        <button onClick={submithandeler} 
        className="m-2 p-2  bg-red-700 rounded-md border-l text-white ml-[200px]" >
            {issign ? "Sign In" : "Sign up"}
        </button >
        <p className="text-white font-bold cursor-pointer" onClick={toggleform}> {!issign ? " New to Netflix Sign up Now" : "Already registered Sign in Now"} </p>
     </form>
    </div>
  )
      }

export default Login;
