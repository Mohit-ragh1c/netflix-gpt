import React from 'react'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
 const movies=useSelector((store)=>store?.movies?.nowPlayingMovies);

 if(!movies) return "loading";

 const {original_title,overview} =movies[0];
 const id=movies[0]?.id;
  return (
    <div>
      <Videotitle title={original_title} overview={overview}></Videotitle>
      <Videobackground id={id}></Videobackground>
    </div>
  )
}

export default Maincontainer
