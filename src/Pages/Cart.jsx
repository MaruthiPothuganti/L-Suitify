import "./CSS/cart.css";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useAddress } from "../Context/AddressContext";
import { isItemInList } from "../Utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../Components/Modal/Modal";
import { CartSummary } from "../Components/CartSummary/CartSummary";
import { CartCard } from "../Components/CartCard/CartCard";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, updateCart, totalOrderPrice, savedAmount } =
    useCart();
  const { wishlist, addToWishlist } = useWishlist();
  const { getDefaultAddress, addresses } = useAddress();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupon, setCoupon] = useState(0);
  const navigate = useNavigate();

  const couponList = [
    { type: "radio", id: 10, name: "coupon" },
    { type: "radio", id: 20, name: "coupon" },
    { type: "radio", id: 0, name: "coupon" },
  ];

  let finalPrice = getFinalPrice();

  function getFinalPrice() {
    let finalPrice;
    if (coupon !== null) {
      finalPrice = totalOrderPrice - totalOrderPrice * (coupon / 100);
    } else {
      finalPrice = totalOrderPrice;
    }
    return finalPrice;
  }

  //-----------------------------------

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(amount) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      key: "rzp_test_jbHBdg17p2eyL0",
      amount: amount * 100,
      currency: "INR",
      name: "L-Suitify",
      description: "Thankyou for Shopping with us",
      image: "",
      handler: async function (response) {
        const orderId = uuid();
        const orderData = {
          orderId,
          products: [...cart],
          amount: amount,
          name: defaultAddress.fullName,
          mobile: defaultAddress.mobile,
          paymentId: response.razorpay_payment_id,
        };

        navigate("/OrderSummary", { state: orderData });
        toast.success("Order Confirmed");
      },
      prefill: {
        name: "L-Suitify",
        email: "l-Suitify@org.co",
        contact: "9999999999",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  let defaultAddress = getDefaultAddress(addresses);

  //-----------------------------------
  return (
    <div className="mainContainer">
      <h1 className="text-center padding-m">Cart ({cart.length}) </h1>
      {cart.length > 0 ? (
        <div>
          <div className="addressContainer">
            <div className="defaultAddress">
              <h2>{defaultAddress.fullName}</h2>
              <h3>
                {defaultAddress.houseNo}, {defaultAddress.city},{" "}
                {defaultAddress.city}, {defaultAddress.state},{" "}
                {defaultAddress.country}, {defaultAddress.mobile},{" "}
                {defaultAddress.ZIP}.
              </h3>
            </div>
            <Link to="/Profile/address">
              <i className="fa-solid fa-pen-to-square fa-2xl"></i>
            </Link>
          </div>
          <div className="cartAndSummary">
            <div className="cartContainer padding-l">
              <CartCard
                cart={cart}
                removeFromCart={removeFromCart}
                updateCart={updateCart}
                wishlist={wishlist}
                addToWishlist={addToWishlist}
                isItemInList={isItemInList}
              />
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
                        <label htmlFor={ele.id} key={ele.id}>
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
                    <i className="fas fa-tag fa-lg padding-s"></i>
                    Apply coupon
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      displayRazorpay(finalPrice);
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainContainer padding-l">
          <div className="flex-column-center productContainer">
            <h2>No Products here. Go and Add some</h2>
            <button>
              <Link to="/ProductListing">Add Products</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
