import "./CSS/productcard.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";
import { isItemInList } from "../Utils/helpers";
import { toast } from "react-toastify";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { userAuthState } = useAuth();
  const { isAuthenticated } = userAuthState;
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();
  const { addToCart, cart } = useCart();

  const wishlistHandler = () => {
    if (!isAuthenticated) {
      toast.warning("Please Login");
      navigate("/Login", { replace: true });
    }
    if (isAuthenticated) {
      addToWishlist(product);
      toast.info("Product added to WishList");
    }
  };

  const cartHandler = () => {
    if (!isAuthenticated) {
      toast.warning("Please Login");
      navigate("/Login", { replace: true });
    }
    if (isAuthenticated) {
      addToCart(product);
      toast.info("Product added to Cart");
    }
  };

  return (
    <div className="ecom-card">
      <img className="ecom-img" src={product.imageURL} alt="suit" />
      <h1 className="prod-title padding-m">{product.title}</h1>
      <p className="seller padding-h-xl">
        Sold by italiano <span className="rating">{product.rating}⭐</span>
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
          <button className="card-btn card-btn-primary" onClick={cartHandler}>
            Add to cart
          </button>
        )}
        {isItemInList(product, wishlist) ? (
          <button
            className="card-btn card-btn-secondary"
            onClick={() => {
              removeFromWishlist(product);
              toast.info("Removed from wishlist");
            }}
          >
            UnWish
          </button>
        ) : (
          <button
            className="card-btn card-btn-secondary"
            onClick={wishlistHandler}
          >
            Wish it
          </button>
        )}
      </div>

      {product.arrivedNewly && <span className="ribbon">NEW</span>}
      {product.sale && <span className="ribbon">SALE</span>}
    </div>
  );
};
