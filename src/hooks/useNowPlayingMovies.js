import { useDispatch } from "react-redux";
import { OPTIONS } from "../constants/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


export const useNowPlayingMovies=()=>{

    const dispatch=useDispatch();

    async function getmovies(){
      const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",OPTIONS)
      .then(response => response.json())
      .catch(err => console.error(err));
      dispatch(addNowPlayingMovies(data?.results));
    }
    
    // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    
      useEffect(()=>{
        getmovies();
      },[]);
}