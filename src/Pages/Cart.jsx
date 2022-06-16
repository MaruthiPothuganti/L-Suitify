import "./CSS/cart.css";
import { useData } from "../Context/UserDataContext";
import { ACTION_TYPE } from "../Utils/constants";

const Cart = () => {
  const { userDataState, userDataDispatch } = useData();
  const { cart } = userDataState;
  const { INCREMENT, DECREMENT, REMOVE_FROM_CART, MOVE_TO_WISHLIST } =
    ACTION_TYPE;

  console.log("cart", cart);

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
                  <button
                    className="btn"
                    onClick={() => {
                      userDataDispatch({
                        type: DECREMENT,
                        payload: prod,
                      });
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="productCount"
                    defaultValue={prod.quantity}
                  />
                  <button
                    className="btn"
                    onClick={() => {
                      userDataDispatch({
                        type: INCREMENT,
                        payload: prod,
                      });
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="action-btns flex-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      userDataDispatch({
                        type: MOVE_TO_WISHLIST,
                        payload: prod,
                      });
                    }}
                  >
                    Move to Wishlist
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      userDataDispatch({
                        type: REMOVE_FROM_CART,
                        payload: prod,
                      });
                    }}
                  >
                    Remove from cart
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

{
  /* <div className="card">
  <img
    className="ecom-img"
    src="https://res.cloudinary.com/doo5jbomi/image/upload/v1649101458/Assets%20For%20Ecom/Suits/eph_the-navy-shadow-gingham-suit_feature_hvcj74.jpg"
    alt="suit"
  />
  <div className="desc">
    <h1 className="prod-title padding-m">Title</h1>
    <p className="seller padding-h-xl">
      Sold by italiano <span className="rating">5⭐</span>
    </p>
    <div className="ecom-price padding-l">
      <span className=" sell-price">₹300</span>
      <span className="strike-price">₹200</span>
      <span className="ecom-disc">Save ₹100</span>
    </div>
    <div className="padding-h-l">
      <button className="btn">-</button>
      <input type="number" className="productCount" />
      <button className="btn">+</button>
    </div>
    <div className="action-btns flex-center">
      <button className="btn btn-primary">Move to Wishlist</button>
      <button className="btn btn-secondary">Remove from cart</button>
    </div>
  </div>
</div>; */
}
