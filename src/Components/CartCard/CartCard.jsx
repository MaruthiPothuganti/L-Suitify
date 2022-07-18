import "./cartCard.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function CartCard({
  cart,
  removeFromCart,
  updateCart,
  wishlist,
  addToWishlist,
  isItemInList,
}) {
  return cart.map((prod) => (
    <div className="card" key={prod._id}>
      <img className="ecom-img" src={prod.imageURL} alt="suit" />
      <div className="desc">
        <h1 className="prod-title padding-m">{prod.title}</h1>
        <p className="seller padding-h-xl">
          Sold by italiano
          <span className="rating">{prod.rating}⭐</span>
        </p>
        <div className="ecom-price padding-l">
          <span className=" sell-price">₹{prod.discountedPrice}</span>
          <span className="strike-price">₹{prod.price}</span>
          <span className="ecom-disc">Save ₹{prod.offer}</span>
        </div>
        <div className="padding-h-l">
          <button
            className="btn"
            onClick={() => {
              updateCart(prod, "decrement");
              toast.info("Cart Updated");
            }}
            disabled={prod.qty === 1}
          >
            -
          </button>
          <span className="productCount">{prod.qty}</span>
          <button
            className="btn"
            onClick={() => {
              updateCart(prod, "increment");
              toast.info("Cart Updated");
            }}
          >
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
                toast.info("Product added to Wishlist");
              }}
            >
              Wish it
            </button>
          )}
          <button
            className="btn btn-secondary"
            onClick={() => {
              removeFromCart(prod);
              toast.info("Cart Updated. Product removed");
            }}
          >
            Uncart
          </button>
        </div>
      </div>
    </div>
  ));
}
