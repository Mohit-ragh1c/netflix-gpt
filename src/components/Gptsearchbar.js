import React, { useEffect } from 'react'
import { useRef } from 'react';
import { OPTIONS } from '../constants/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addgptmovies, removegptmovies } from '../utils/gptSlice';

const Gptsearchbar = () => {

  const searchmovie=useRef();  
  const dispatch=useDispatch();


const handleserach=()=>{
     getmovies(searchmovie.current.value);
}


const getmovies=async(movie)=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

     const moviedata= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",OPTIONS);
     const json= await moviedata.json();
     dispatch(addgptmovies(json.results));
}



  return (
    <div className="pt-[20%] flex justify-center" >
      <form className="w-1/2 bg-black  rounded-lg gridcols-12 " onSubmit={e=>e.preventDefault()}>
        <input type='text'
        className=" ml-10 w-[500px] rounded-lg p-4 m-4 col-span-6 font-bold text-[20px]"
        placeholder='what you would like to watch today'
        ref={searchmovie}>    
        </input>
        <button className="col-span-6 py-2 px-4 bg-red-700 text-white rounded-lg ml-20"
        onChange={dispatch(removegptmovies())}
        onClick={handleserach}>Search</button>
      </form>
    </div>
  )
}

export default Gptsearchbar
