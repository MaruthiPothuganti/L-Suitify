import { Filters } from "../Components/Filters/Filters";
import axios from 'axios';
import { useState, useEffect } from "react";
import { ProductCard } from "../Molecules/ProductCard";
import './CSS/Productlisting.css'



let ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      (async () => {
        setLoading(true);
        setError();

        try {
            const resp = await axios.get('/api/products');
            console.log(resp.data.products);
            setProducts(resp.data.products);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    })()
    }, [])

    return <div className="products flex">
        <Filters />
        <div className="product-listing">
            <h2>{loading && " Loading..."}</h2>
                <div className="product-container flex-row-spacearound">
                         {products.map((product) =>
                             <ProductCard key={product.id} product={ product }/>
                         )}
                 </div>
        </div>


    </div>
}


export default ProductListing ;
