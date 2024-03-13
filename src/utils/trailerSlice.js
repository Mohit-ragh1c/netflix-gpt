import { createSlice } from "@reduxjs/toolkit";

const trailerSlice=createSlice({

    name:"trailer",
    initialState:{
      trailervideo:null,
    },
    reducers:{
        addtrailervideo:(state,action)=>{
            state.trailervideo=action.payload;
        },

    }
})
export const {addtrailervideo}=trailerSlice.actions;
export default trailerSlice.reducer;