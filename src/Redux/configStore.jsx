import {configureStore} from '@reduxjs/toolkit'
import authSlice from './slices/authSlice';
import towSlice from './slices/towSlice';
import serSlice from './slices/serSlice';
import userSlice from './slices/userSlice';
import wSlice from './slices/wSlice';

export const store = configureStore({
    reducer:{
        user: authSlice,
        typeOfWorks: towSlice,
        services: serSlice,
        works: wSlice,
        users:userSlice
    },
});