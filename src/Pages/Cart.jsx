import "./CSS/cart.css";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { isItemInList } from "../Utils/helpers";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const { wishlist, addToWishlist } = useWishlist();

  return (
    <div className="mainContainer">
      <h1 className="text-center padding-m">Cart </h1>
      <div className="spacearound-wrap padding-l">
        {cart.length > 0 ? (
          cart.map((prod) => (
            <div className="card" key={prod._id}>
              <img className="ecom-img" src={prod.imageURL} alt="suit" />
              <div className="desc">
                <h1 className="prod-title padding-m">{prod.title}</h1>
                <p className="seller padding-h-xl">
                  Sold by italiano{" "}
                  <span className="rating">{prod.rating}⭐</span>
                </p>
                <div className="ecom-price padding-l">
                  <span className=" sell-price">₹{prod.discountedPrice}</span>
                  <span className="strike-price">₹{prod.price}</span>
                  <span className="ecom-disc">Save ₹{prod.offer}</span>
                </div>
                <div className="padding-h-l">
                  <button className="btn" onClick={() => {}}>
                    -
                  </button>
                  <span className="productCount">{prod.qty}</span>
                  <button className="btn" onClick={() => {}}>
                    +
                  </button>
                </div>
                <div className="action-btns flex-center">
                  {isItemInList(prod, wishlist) ? (
                    <button className="btn btn-primary">
                      <Link to="/wishlist">Go to Wishlist</Link>
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        addToWishlist(prod);
                      }}
                    >
                      Wish it
                    </button>
                  )}
                  <button
                    className="btn btn-secondary"
                    onClick={() => removeFromCart(prod)}
                  >
                    Uncart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <img
            src="https://res.cloudinary.com/doo5jbomi/image/upload/v1655226082/Assets%20For%20Ecom/error%20and%20empty/empty_cart_fdjx2f.svg"
            alt="empty list"
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
