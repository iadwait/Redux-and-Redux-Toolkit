import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/authActions"

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    if (action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
            error: null,
        };
    }
    else if (action.type === LOGIN_FAILURE) {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            error: action.payload,
        }
    }
    else if (action.type === LOGOUT) {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            error: null
        }
    }
    else {
        return state
    }
}

export default authReducer