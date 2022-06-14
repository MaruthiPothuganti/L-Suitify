import { ACTION_TYPE } from "../Utils/constants";
import { userDataInitialState } from "../Utils/helpers";

export const dataReducer = (state, action) => {

    const { ADD_TO_CART,ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,REMOVE_FROM_CART} = ACTION_TYPE;

    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };

        case ADD_TO_WISHLIST:
            console.log("wishlist", userDataInitialState.wishlist)
            console.log(action.payload)
            return { ...state, wishlist: [...state.wishlist, action.payload] };
        case REMOVE_FROM_WISHLIST:
            return {...state, wishlist: [...state.wishlist.filter(prod=> prod._id != action.payload._id)]}

        default:
            return userDataInitialState;
    }
}
