import { ACTION_TYPE } from "../Utils/constants";


export const filterReducer = (state, action) => {
    const { CLEAR,
        LOW_TO_HIGH,
        HIGH_TO_LOW,
        STATUS,
        STOCK,
        FAST_DELIVERY,
        SORT_BY,
        RATING,
        PRICE_RANGE,
        PRODUCTS,
        CATEGORIES
    } = ACTION_TYPE;
    switch (action.type) {
        case PRODUCTS: return { ...state, products: action.payload };

        case SORT_BY: return { ...state, filters: { ...state.filters, sortby: action.payload } };

        default:
            return {...state};
    }
}
