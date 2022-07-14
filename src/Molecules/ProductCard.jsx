import "./CSS/productcard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { userAuthState } = useAuth();
  const { isAuthenticated } = userAuthState;
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const wishlistHandler = () => {
    if (!isAuthenticated) {
      navigate("/Login", { replace: true });
    }
    if (isAuthenticated) {
      addToWishlist();
    }
  };

  const cartHandler = () => {
    if (!isAuthenticated) {
      navigate("/Login", { replace: true });
    }
    if (isAuthenticated) {
      addToCart();
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
        <button className="card-btn card-btn-primary" onClick={cartHandler}>
          Add to cart
        </button>

        <button
          className="card-btn card-btn-secondary"
          onClick={wishlistHandler}
        >
          To Wishlist
        </button>
      </div>

      {product.arrivedNewly && <span className="ribbon">NEW</span>}
      {product.sale && <span className="ribbon">SALE</span>}
    </div>
  );
};
