import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginState',
    initialState: {
        isLoggedIn: false,
        user: null,
        error: null
    },
    reducers: {
        login: (state, userData) => {
            state.isLoggedIn = true;
            console.log(userData.payload)
            state.user = userData.payload;
            state.error = null
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.error = null
        },
        setError: (state, errorMessage) => {
            state.isLoggedIn = false;
            state.user = null;
            console.log(`Inside reducer ${errorMessage.payload}`)
            state.error = errorMessage.payload
        }
    }
})

// Export Actions
export const {login, logout, setError} = loginSlice.actions

// Export Reducer
export default loginSlice.reducer
