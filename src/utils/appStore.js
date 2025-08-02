import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlicer';
import feedReducer from './feedSlicer';
import connectionReducer from './connectionSlice';
import requestReducer from './requestSlicer';

const store = configureStore({
    reducer:{
        user : userReducer,
        feed : feedReducer,
        connection: connectionReducer,
        requests : requestReducer
    }
});

export default store;