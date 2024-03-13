import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtrailermovies } from '../utils/gptSlice';


const Moviecard = ({path,movie}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <div className="w-[170px] m-4">

<button className="  translate-y-[255px] bg-purple-600 text-white px-2 py-2 font-bold rounded-lg hover:bg-red-600"
      onClick={()=>{
        dispatch(addtrailermovies(movie));
        navigate("/trailervideo");
      }}>check it</button>

   
      <img className="rounded-lg "
      alt='img poster' src={"https://image.tmdb.org/t/p/w500/"+path}></img>
     
    </div>

  )
}

export default Moviecard
