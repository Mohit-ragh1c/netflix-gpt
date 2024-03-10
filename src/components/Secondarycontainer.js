import React from 'react'
import Movielist from './Movielist';
import { useSelector } from 'react-redux';


const Secondarycontainer = () => {
  const movie=useSelector(store=>store?.movies?.nowPlayingMovies);
  const popular=useSelector(store=>store?.movies?.PopulerMovies);
  const Upcomming=useSelector(store=>store.movies?.UpcommingMovies);
 
  return movie &&  (
    <div className=" bg-black">
    <div className="-mt-52 relative z-20">
      <Movielist title={"Now playing"} movie={movie} ></Movielist>
      <Movielist title={"Populer"} movie={popular} ></Movielist>
      <Movielist title={"Trending"} movie={movie} ></Movielist>
      <Movielist title={"Upcomming Movies"} movie={Upcomming} ></Movielist>
      <Movielist title={"Horror"} movie={movie} ></Movielist>
    </div>
    </div>
  )
}

export default Secondarycontainer;