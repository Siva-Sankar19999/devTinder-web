import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlicer';
import feedReducer from './feedSlicer';
import connectionReducer from './connectionSlice';

const store = configureStore({
    reducer:{
        user : userReducer,
        feed : feedReducer,
        connection: connectionReducer
    }
});

export default store;