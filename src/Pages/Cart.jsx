import "./CSS/cart.css";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { isItemInList } from "../Utils/helpers";
import { Link } from "react-router-dom";
import { Modal } from "../Components/Modal/Modal";
import { CartSummary } from "../Components/CartSummary/CartSummary";
import { CartCard } from "../Components/CartCard/CartCard";

const Cart = () => {
  const { cart, removeFromCart, updateCart, totalOrderPrice, savedAmount } =
    useCart();
  const { wishlist, addToWishlist } = useWishlist();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupon, setCoupon] = useState(0);

  const couponList = [
    { type: "radio", id: 10, name: "coupon" },
    { type: "radio", id: 20, name: "coupon" },
    { type: "radio", id: 0, name: "coupon" },
  ];

  let finalPrice;
  if (coupon !== null) {
    finalPrice = totalOrderPrice - totalOrderPrice * (coupon / 100);
  } else {
    finalPrice = totalOrderPrice;
  }

  //-----------------------------------

  //-----------------------------------
  return (
    <div className="mainContainer">
      <h1 className="text-center padding-m">Cart ({cart.length}) </h1>
      <div className="cartAndSummary">
        <div className="cartContainer padding-l">
          {cart.length > 0 ? (
            <CartCard
              cart={cart}
              removeFromCart={removeFromCart}
              updateCart={updateCart}
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              isItemInList={isItemInList}
            />
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
            <CartSummary cart={cart} finalPrice={finalPrice} />
            <div className="orderBtn padding-s">
              <Modal
                show={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
              >
                {couponList.map((ele) => {
                  return (
                    <label htmlFor={ele.id}>
                      <input
                        type={ele.type}
                        name={ele.name}
                        id={ele.id}
                        className={ele.name}
                        onChange={() => setCoupon(ele.id)}
                        checked={coupon === ele.id}
                      />{" "}
                      {ele.id !== 0 ? `Dhamaka ${ele.id}% Off` : "None"}
                    </label>
                  );
                })}
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
