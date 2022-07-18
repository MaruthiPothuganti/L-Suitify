import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../Hooks/useAxios";
import { useAuth } from "./AuthContext";

const WishContext = createContext();
const WishlistContext = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("userWishlist")) ?? []
  );
  const { response, loading, fireRequest } = useAxios();
  const { userAuthState } = useAuth();
  const { token, isAuthenticated } = userAuthState;

  useEffect(() => {
    if (isAuthenticated) {
      fireRequest({
        method: "get",
        url: "/api/user/wishlist",
        headers: { authorization: token },
      });
    } // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (response) {
      const newList = response.wishlist;
      localStorage.setItem("userWishlist", JSON.stringify(response.wishlist));
      setWishlist(newList);
    } // eslint-disable-next-line
  }, [response]);

  const addToWishlist = (product) => {
    fireRequest({
      method: "post",
      url: "/api/user/wishlist",
      headers: { authorization: token },
      data: { product },
    });
  };

  const removeFromWishlist = (product) => {
    fireRequest({
      method: "delete",
      url: `/api/user/wishlist/${product._id}`,
      headers: { authorization: token },
    });
  };

  return (
    <WishContext.Provider
      value={{ wishlist, loading, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishContext.Provider>
  );
};

const useWishlist = () => useContext(WishContext);

export { WishlistContext, useWishlist };
