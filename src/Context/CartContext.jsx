import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../Hooks/useAxios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();
const CartListContext = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("userCart")) ?? []
  );

  const { response, loading, fireRequest } = useAxios();
  const { userAuthState } = useAuth();
  const { token, isAuthenticated } = userAuthState;

  useEffect(() => {
    if (isAuthenticated) {
      getCartProducts();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (response) {
      const newList = response.cart;
      localStorage.setItem("userCart", JSON.stringify(response.cart));
      setCart(newList);
    }
  }, [response]);

  const getCartProducts = () => {
    fireRequest({
      method: "get",
      url: "/api/user/cart",
      headers: { authorization: token },
    });
  };

  const addToCart = (product) => {
    fireRequest({
      method: "post",
      url: "/api/user/cart",
      headers: { authorization: token },
      data: { product },
    });
  };

  const removeFromCart = (product) => {
    fireRequest({
      method: "delete",
      url: `/api/user/cart/${product._id}`,
      headers: { authorization: token },
    });
  };

  const updateCart = (product, operation) => {
    fireRequest({
      method: "post",
      url: `/api/user/cart/${product._id}`,
      headers: { authorization: token },
      data: { action: { type: operation } },
    });
  };

  const emptyCart = () => {
    fireRequest({
      method: "delete",
      url: "/api/user/cart",
      headers: { authorization: token },
    });
  };

  let totalOrderPrice = cart.reduce(
    (acc, curr) => acc + Number(curr.discountedPrice) * curr.qty,
    0
  );

  let savedAmount = cart.reduce(
    (acc, curr) => acc + Number(curr.offer) * curr.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        removeFromCart,
        updateCart,
        savedAmount,
        totalOrderPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartListContext, useCart };
