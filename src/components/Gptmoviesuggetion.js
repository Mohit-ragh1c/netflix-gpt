import React from 'react'
import { useSelector } from 'react-redux'
import Searchmovies from './Searchmovies';

const Gptmoviesuggetion = () => {

    const gptmovies=useSelector(store=>store.gpt.gptmovies);

    if(!gptmovies) return "loading search movies";
  
  return (
    <div className="p-4 m-4 bg-black text-white">
    <div className="flex m-2 flex-wrap" >
        {
            gptmovies.map((movie)=>(
                <Searchmovies  key={movie.title} movie={movie}></Searchmovies>
            ))
        }
    </div>
    </div>
  )
}

export default Gptmoviesuggetion
