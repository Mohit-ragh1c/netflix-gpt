import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removetrailermovies } from '../utils/gptSlice';
import { useNavigate } from 'react-router-dom';

const Videotitle = ({title,overview}) => {
  const trailermovies=useSelector(store=>store?.gpt?.trailermovies);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <div className=" w-screen aspect-video pt-36 px-12 absolute  text-white bg-gradient-to-r  from-black">
      
        <h1 className="text-6xl font-bold">{title}</h1> 
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex gap-2">
            <button className="bg-white text-black p-4 px-8 text-xl bg-opacity-50 rounded-lg">
                play
            </button>
            <button className="bg-gray-500 text-white p-4 px-8 text-xl bg-opacity-50 rounded-lg">
              More Info
            </button>
            {  trailermovies &&
        <button className= " bg-blue-600 m-4 rounded-lg text-white font-bold px-2 py-2"
        onClick={()=>{
          dispatch(removetrailermovies())
          navigate("/browse")
        }}> back </button>
}
        </div>
     
    </div>
  )
}

export default Videotitle
