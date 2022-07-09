import "./CSS/productcard.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/UserDataContext";
import { ACTION_TYPE } from "../Utils/constants";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

export const ProductCard = ({ product }) => {
  const [inWishlist, setInWishlist] = useState(false);
  const navigate = useNavigate();
  const { userDataDispatch, userDataState } = useData();
  const { wishlist } = userDataState;
  const { userAuthState } = useAuth();
  const { isAuthenticated } = userAuthState;
  const { ADD_TO_CART, ADD_TO_WISHLIST } = ACTION_TYPE;

  const wishlistHandler = () => {
    if (!isAuthenticated) {
      navigate("/Login", { replace: true });
    }
    if (isAuthenticated) {
      if (wishlist.includes(product)) {
        setInWishlist(true);
      }
      if (!wishlist.includes(product)) {
        userDataDispatch({
          type: ADD_TO_WISHLIST,
          payload: product,
        });
      }
    }
  };

  const cartHandler = () => {
    if (!isAuthenticated) {
      navigate("/Login", { replace: true });
    }
    if (isAuthenticated) {
      userDataDispatch({
        type: ADD_TO_CART,
        payload: product,
      });
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
          {inWishlist ? "Added ✅" : "To Wishlist"}
        </button>
      </div>

      {product.arrivedNewly && <span className="ribbon">NEW</span>}
      {product.sale && <span className="ribbon">SALE</span>}
    </div>
  );
};
