import { useAxios } from "../Hooks/useAxios";
const userData = JSON.parse(localStorage.getItem("userData"));
const encodedToken = userData.token;
const { fireRequest } = useAxios();

 const getCartProducts = () => {
    fireRequest({
        method: "get",
        url: '/api/user/cart',
        headers: { authorization: encodedToken },
    });
}

 const addToCart = (product) => {
    fireRequest({
        method: "post",
        url: '/api/user/cart',
        headers: { authorization: encodedToken },
        data: { product }
    });
}

 const removeFromCart = (product) => {
    fireRequest({
        method: "delete",
        url: `/api/user/cart/${product._id}`,
        headers: { authorization: encodedToken },
    });
}

 const updateCart = (product, type) => {
    fireRequest({
        method: "post",
        url: `/api/user/cart/${product._id}`,
        headers: { authorization: encodedToken },
        action: {
            type: type
        }
    });
}


// -------------------------------------------------------------

  const getWishlist = () => {
    fireRequest({
      method: "get",
      url: "/api/user/wishlist",
      headers: { authorization: encodedToken },
    });
  };

  const addToWishlist = (product) => {
    fireRequest({
      method: "post",
      url: "/api/user/wishlist",
      headers: { authorization: encodedToken },
      data: { product },
    });
  };

  const removeFromWishlist = (product) => {
    fireRequest({
      method: "delete",
      url: `/api/user/wishlist/${product._id}`,
      headers: { authorization: encodedToken },
    });
  };
