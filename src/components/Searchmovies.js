import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtrailermovies } from '../utils/gptSlice';




const Searchmovies = ({movie}) => {

  const navigate=useNavigate();
    const dispatch=useDispatch();
    const{title,backdrop_path,
      original_language,popularity,release_date
      }=movie;
      
      function showtrailer(){
        dispatch(addtrailermovies(movie));
    navigate("/trailervideo");
  }

    if(!backdrop_path) return ;
   return  (
    <div className="mt-6  shadow-gray-700 hover:opacity-75" >
      <div className="w-[350px] m-4">
    
      <img className="rounded-lg "
      alt='img poster' src={"https://image.tmdb.org/t/p/w500/"+backdrop_path}></img>
     <button className="bg-purple-600 text-white px-3 py-3 font-bold rounded-lg translate-y-[-50px] hover:bg-red-600" onClick={showtrailer}>check it</button>
    </div>
      <h1 className="ml-2 text-2xl font-bold">{title}<span>({original_language})</span> </h1>
      <br></br>
      <h2>release date :  {release_date} <span>popularity : {popularity}</span></h2>
    </div>
  )
}

export default Searchmovies
