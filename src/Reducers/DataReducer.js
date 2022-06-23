import { ACTION_TYPE } from "../Utils/constants";
import { userDataInitialState } from "../Utils/helpers";

export const dataReducer = (state, action) => {

    const { ADD_TO_CART,ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,REMOVE_FROM_CART, INCREMENT, DECREMENT, MOVE_TO_WISHLIST, MOVE_TO_CART, LOGOUT} = ACTION_TYPE;

    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };

        case ADD_TO_WISHLIST:
            return { ...state, wishlist: [...state.wishlist, action.payload] };

        case REMOVE_FROM_WISHLIST:
            return { ...state, wishlist: [...state.wishlist.filter(prod => prod._id !== action.payload._id)] };

        case REMOVE_FROM_CART:
            return { ...state, cart: [...state.cart.filter(prod => prod._id !== action.payload._id)] };

        case MOVE_TO_WISHLIST:
            return {
                ...state, cart: [...state.cart.filter(prod => prod._id !== action.payload._id)],
                wishlist: [...state.wishlist, action.payload]
            };
        case MOVE_TO_CART:
            return {
                ...state, cart: [...state.cart, action.payload],
                 wishlist: [...state.wishlist.filter(prod => prod._id !== action.payload._id)]
            };

        case INCREMENT:
            console.log("prod", action.payload);
            return {
                ...state, cart: state.cart.map((prod) => {
                    if (prod._id === action.payload._id) {
                        return {...prod, quantity :prod.quantity+1}
                    }
                    return prod;
                })
            }

        case DECREMENT:
            console.log("prod", action.payload);
            return {
                ...state, cart: state.cart.map((prod) => {
                    if (prod._id === action.payload._id && prod.quantity>1) {
                        return {...prod, quantity :prod.quantity-1}
                    }
                    return prod;
                })
            }
        case LOGOUT:
            return userDataInitialState;
        default:
            return userDataInitialState;
    }
}
