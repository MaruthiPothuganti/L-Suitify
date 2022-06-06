import { Filters } from "../Components/Filters/Filters";
import axios from 'axios';
import { useState, useEffect } from "react";
import { ProductCard } from "../Molecules/ProductCard";
import { useFilter } from "../Context/ProductContext";
import './CSS/Productlisting.css'



let ProductListing = () => {
    const { filterState, filterDispatch } = useFilter();
    let { products } = filterState;

    return (<div className="products flex">
        <Filters />
        <div className="product-listing">
                <div className="product-container flex-row-spacearound">
                         {products.map((product) =>
                             <ProductCard key={product.id} product={ product }/>
                         )}
                 </div>
        </div>
    </div>)
}


export default ProductListing ;
