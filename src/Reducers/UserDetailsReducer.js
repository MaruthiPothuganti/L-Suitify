import { ACTION_TYPE } from "../Utils/constants";
import { initialAuthState } from "../Utils/helpers";

export const userDetailsReducer = (state, action) => {
    const { LOGIN, LOGOUT } = ACTION_TYPE;

    switch (action.type) {
        case LOGIN:
            localStorage.setItem("userData", JSON.stringify({
                token: action.payload.data.encodedToken,
                name: action.payload.data.foundUser.firstName,
                fullName: action.payload.data.foundUser.firstName +" "+action.payload.data.foundUser.lastName,
                email: action.payload.data.foundUser.email,
                isAuthenticated: true,
            }));
            return {
                ...state,
                token: action.payload.data.encodedToken,
                isAuthenticated: true,
                name: action.payload.data.foundUser.firstName,
                fullName: action.payload.data.foundUser.firstName +" "+action.payload.data.foundUser.lastName,
                email: action.payload.data.foundUser.email
            }
        case LOGOUT:
            localStorage.clear();
            return initialAuthState;

        default:
           return initialAuthState;
    }
}

