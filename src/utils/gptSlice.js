import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showgptsearch:false,
        gptmovies:null,
        trailermovies:null,
    },
    reducers:{
        togglegptsearch:(state)=>{
            state.showgptsearch=!state.showgptsearch;
        },
        addtrailermovies:(state,action)=>{
           state.trailermovies=action.payload;
        },
        addgptmovies:(state,action)=>{
            state.gptmovies=action.payload;
        },
        removegptmovies:(state,action)=>{
            state.gptmovies=null;
        },
        removetrailermovies:(state,action)=>{
            state.trailermovies=null;
        }
    }

})
export const{togglegptsearch,addgptmovies,removegptmovies,addtrailermovies,removetrailermovies}=gptSlice.actions;
export default gptSlice.reducer;