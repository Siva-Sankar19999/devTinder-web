import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlicer';
import feedReducer from './feedSlicer';


const store = configureStore({
    reducer:{
        user : userReducer,
        feed : feedReducer
    }
});

export default store;