import { useDispatch } from "react-redux";
import { OPTIONS } from "../constants/constant";
import { addPopulerMovies } from "../utils/movieSlice";
import { useEffect } from "react";


export const useTrailer=()=>{

    const dispatch=useDispatch();

    async function getmovies(){
      const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",OPTIONS)
      .then(response => response.json())
      .catch(err => console.error(err));

      dispatch(addPopulerMovies(data?.results));
    }
    
    // fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
    // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    
      useEffect(()=>{
        getmovies();
      },[]);
}
// https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1