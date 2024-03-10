import React, { useEffect, useState } from 'react'
import { OPTIONS } from '../constants/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addtrailervideo } from '../utils/movieSlice';

const Videobackground = ({ id }) => {
  const trailer = useSelector(store => store.movies?.trailervideo)
  const dispatch = useDispatch();
  
  // this is trailer movie data and api


  const data = async () => {
    const video = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, OPTIONS)

    const videodata = await video.json();

    const filterdata = videodata?.results?.filter((video) => video.type === "Trailer");

    const trailer = filterdata?.length ? filterdata[0] : videodata.results[0];
  

    dispatch(addtrailervideo(trailer));

  }

  useEffect(() => {
  
    data();
  }, [])

  
  if (!trailer) return "loading";
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow=" autoplay ;  gyroscope; picture-in-picture;" ></iframe>
    </div>
  )
}

export default Videobackground
