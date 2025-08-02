import { createSlice } from "@reduxjs/toolkit";

const requestSlicer= createSlice({
    name: 'requests',
    initialState : null,
    reducers : {
        addRequests : (state,action) =>{  
            return action.payload;
        }
    }
});

export const {addRequests} = requestSlicer.actions;
export default requestSlicer.reducer;