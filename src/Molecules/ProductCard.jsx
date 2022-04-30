import './CSS/productcard.css'

export let ProductCard = ({product}) => {
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
                            <i className="fa-solid fa-cart-circle-plus"></i>Add to cart
                        </button>
                        <button className="card-btn card-btn-secondary">Check Out <ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
                    </div>

            {product.arrivedNewly && <span className="ribbon">NEW</span>}
            {product.sale && <span className="ribbon">SALE</span>}

       </div>
    );
}
