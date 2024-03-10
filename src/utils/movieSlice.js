import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailervideo:null,
        PopulerMovies:null,
        UpcommingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addtrailervideo:(state,action)=>{
            state.trailervideo=action.payload;
        },
        addPopulerMovies:(state,action)=>{
           state.PopulerMovies=action.payload;
        },
        addUpcommingMovies:(state,action)=>{
            state.UpcommingMovies=action.payload;
        }

    }
})
export const {addNowPlayingMovies,addtrailervideo,addPopulerMovies,addUpcommingMovies}=movieSlice.actions;
export default movieSlice.reducer;