import { useFilter } from "../Context/ProductContext";
import { ACTION_TYPE } from "../Utils/constants";
import { initialFilterState } from "../Utils/helpers";

export const filterReducer = (state, action) => {

    const {
        SORT_BY,
        PRODUCTS,
        RATING,
        CATEGORIES,
        CLEAR,
        PRICE_RANGE,
        STATUS
    } = ACTION_TYPE;

    switch (action.type) {
        case PRODUCTS: return { ...state, products: action.payload };

        case PRICE_RANGE: return { ...state, filters: { ...state.filters, priceRange: action.payload } }

        case SORT_BY: return { ...state, filters: { ...state.filters, sortby: action.payload } };

        case RATING: return { ...state, filters: { ...state.filters, rating: action.payload } };

        case CATEGORIES:
            return {
                ...state,
                categories: state.categories.includes(action.payload)
                    ? state.categories.filter((el) => el !== action.payload)
                    : [...state.categories, action.payload]
            };

         case STATUS: return {
            ...state,
                status: state.status.includes(action.payload)
                    ? state.status.filter((el) => el !== action.payload)
                    : [...state.status, action.payload]
        };

        case CLEAR: return {
            ...state, categories:[], status:[], filters: initialFilterState.filters
        };

        default:
            return state;
    }
}
