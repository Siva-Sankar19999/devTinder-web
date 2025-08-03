import { createSlice } from "@reduxjs/toolkit";

const requestSlicer= createSlice({
    name: 'requests',
    initialState : null,
    reducers : {
        addRequests : (state,action) =>{  
            return action.payload;
        },
        removeRequests : (state,action) =>{
            const newArray = state.filter((r)=> r._id !== action.payload);
            return newArray;
        }
    }
});

export const {addRequests,removeRequests} = requestSlicer.actions;
export default requestSlicer.reducer;