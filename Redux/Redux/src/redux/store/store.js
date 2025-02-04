import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import counterReducer from "../reducers/counterReducer";

// Combine Reducers
const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
});

// Create Redux Store
const store = createStore(rootReducer);

export default store;