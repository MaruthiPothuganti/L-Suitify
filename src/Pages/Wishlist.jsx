import { Link } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";
import { isItemInList } from "../Utils/helpers";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart } = useCart();

  return (
    <div className="mainContainer">
      <h1 className="text-center padding-m">Wishlist({wishlist.length})</h1>
      <div className="flex-row-spacearound padding-l">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div className="ecom-card" key={product._id}>
              <img
                className="ecom-img"
                src={product.imageURL}
                alt={product.title}
              />
              <h1 className="prod-title padding-m">{product.title}</h1>
              <p className="seller padding-h-xl">
                Sold by italiano{" "}
                <span className="rating">{product.rating}⭐</span>
              </p>
              <div className="ecom-price padding-l">
                <span className=" sell-price">₹{product.discountedPrice}</span>
                <span className="strike-price">₹{product.price}</span>
                <span className="ecom-disc">Save ₹{product.offer}</span>
              </div>

              <div className="action-btns flex-center">
                {isItemInList(product, cart) ? (
                  <button className="card-btn card-btn-primary">
                    <Link to="/cart">Go to cart</Link>
                  </button>
                ) : (
                  <button
                    className="card-btn card-btn-primary"
                    onClick={() => {
                      addToCart(product);
                      toast.info("Product added to Cart");
                    }}
                  >
                    Add to cart
                  </button>
                )}
                <button
                  className="card-btn card-btn-secondary"
                  onClick={() => {
                    removeFromWishlist(product);
                    toast.info("Product removed from Wishlist");
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex-column-center productContainer">
            <h2>No Products here. Go and Wish some</h2>
            <button>
              <Link to="/ProductListing">Add Products</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
