import { createContext, useContext, useReducer } from "react";
import { filterReducer } from '../Reducers/filterReducer'



const ProductContext = createContext();
const useFilter = () => useContext(ProductContext);

const ProductProvider = ({ Children }) => {
    const filterInitialState = {
        status: [],
        categories: [],
        price: 10000,
        rating: null,
        sortBy: "",
        inStock: false,
        fastDelivery: false,
    }
    const [filterState, filterDispatch] = useReducer(filterReducer, filterInitialState);


    return (
    <ProductContext.Provider value={{ filterState, filterDispatch }}>
        {Children}
    </ProductContext.Provider>
    );
}

export { ProductProvider, useFilter };
