import "./CSS/cart.css";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { isItemInList } from "../Utils/helpers";
import { Link } from "react-router-dom";
import { Modal } from "../Components/Modal/Modal";

const Cart = () => {
  const { cart, removeFromCart, updateCart } = useCart();
  const { wishlist, addToWishlist } = useWishlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mainContainer">
      <h1 className="text-center padding-m">Cart ({cart.length}) </h1>
      <div className="cartAndSummary">
        <div className="cartContainer padding-l">
          {cart.length > 0 ? (
            cart.map((prod) => (
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
                      }}
                    >
                      -
                    </button>
                    <span className="productCount">{prod.qty}</span>
                    <button
                      className="btn"
                      onClick={() => {
                        updateCart(prod, "increment");
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
            <div className="flex-column-center productContainer">
              <h2>No Products here. Go and Add some</h2>
              <button>
                <Link to="/ProductListing">Add Products</Link>
              </button>
            </div>
          )}
        </div>
        <div className="cartSummary flex-row-center">
          <div className="orderSummary">
            <h2>Cart Summary:-</h2>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((prod) => {
                  return (
                    <tr key={prod._id}>
                      <td>{prod.title}</td>
                      <td>{prod.qty}</td>
                      <td>
                        ₹{prod.discountedPrice} * {prod.qty}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td></td>
                  <td>Total</td>
                  <td>₹ 2000</td>
                </tr>
              </tbody>
            </table>
            <div className="orderBtn padding-s">
              <Modal
                show={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
              >
                Baba Blacksheep
              </Modal>
              <button className="btn" onClick={() => setIsModalOpen(true)}>
                Apply coupon
              </button>
              <button className="btn btn-primary">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
