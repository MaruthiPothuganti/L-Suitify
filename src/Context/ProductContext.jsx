import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios'
import { ACTION_TYPE } from "../Utils/constants";
import { filterReducer } from "../Reducers/FilterReducer";
import { initialFilterState } from "../Utils/helpers";

const ProductFilterContext = createContext();

const ProductContext = ({ children }) => {
    const { PRODUCTS } = ACTION_TYPE;
    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get('/api/products');
                filterDispatch({
                    type: PRODUCTS,
                    payload: resp.data.products
                })

            } catch (error) {
                console.log(error);
            }
        })()
        // eslint-disable-next-line
    }, [])


    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState)

    return (
        <ProductFilterContext.Provider value={{filterState,filterDispatch, initialFilterState}}>
            {children}
        </ProductFilterContext.Provider>
    );
}

const useFilter = () => useContext(ProductFilterContext);
export { ProductContext, useFilter }
