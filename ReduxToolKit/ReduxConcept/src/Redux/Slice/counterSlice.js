import { createSlice } from "@reduxjs/toolkit";

// Create Slice
const counterSlice = createSlice({
    name: 'myCounter',
    initialState: {
        value: 0
    },
    reducers: {
        // Reducers Actions
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value = state.value - 1
            }
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

// Export Actions
export const {increment, decrement, reset} = counterSlice.actions

// Export Reducer
export default counterSlice.reducer