import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slice/counterSlice'
import loginStateReducer from './Slice/LoginSlice'

export const store = configureStore({
    reducer: {
        myCounter: counterReducer,
        loginState: loginStateReducer
    }
})