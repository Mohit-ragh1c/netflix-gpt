import React from 'react'
import Videotitle from './Videotitle';
import Videobackground from './Videobackground';
import { useSelector } from 'react-redux';


const Trailervideo = () => {
   const movie=useSelector(store=>store?.gpt?.trailermovies);
  console.log(movie);
    if(!movie) return "loaidng";
    const{title,backdrop_path,
        original_language,overview,release_date,id
        }=movie;

  return (
    <div>
     
     <Videotitle title={title} overview={overview}></Videotitle>
      <Videobackground id={id}></Videobackground>
      
    </div>
  )
}

export default Trailervideo
