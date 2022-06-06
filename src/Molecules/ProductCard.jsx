import './CSS/productcard.css'

export const ProductCard = ({product}) => {
    return (
            <div className="ecom-card">
                    <img className="ecom-img" src={product.imageURL} alt="suit" />
                <h1 className="prod-title padding-m">{ product.title}</h1>
                    <p className="seller padding-h-xl">Sold by italiano</p>
                    <div className="ecom-price padding-l">
                        <span className=" sell-price">₹{product.discountedPrice}</span>
                        <span className="strike-price">₹{product.price}</span>
                    <span className="ecom-disc">Save ₹{product.offer}</span>
                    </div>

                    <div className="action-btns flex-center">
                        <button className="card-btn card-btn-primary">
                            Add to cart
                        </button>
                <button className="card-btn card-btn-secondary">To Wishlist</button>
                    </div>

            {product.arrivedNewly && <span className="ribbon">NEW</span>}
            {product.sale && <span className="ribbon">SALE</span>}

       </div>
    );
}
