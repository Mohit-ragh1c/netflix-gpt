import { useDispatch } from "react-redux";
import { OPTIONS } from "../constants/constant";
import { addUpcommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


export const useUpcomming=()=>{

    const dispatch=useDispatch();

    async function getmovies(){
      const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",OPTIONS)
      .then(response => response.json())
      .catch(err => console.error(err));
      dispatch(addUpcommingMovies(data?.results));
    }
    
   
    
      useEffect(()=>{
        getmovies();
      },[]);
}