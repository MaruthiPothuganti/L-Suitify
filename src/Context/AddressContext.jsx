import { useContext, createContext, useEffect, useState } from "react";
import { useAxios } from "../Hooks/useAxios";
import { useAuth } from "./AuthContext";

const Address = createContext();

const AddressContext = ({ children }) => {
  const { response, fireRequest } = useAxios();
  const { userAuthState } = useAuth();
  const { token, isAuthenticated } = userAuthState;

  const [addresses, setAddresses] = useState(
    JSON.parse(localStorage.getItem("userAddress")) ?? []
  );

  useEffect(() => {
    if (isAuthenticated) {
      getAddresses();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (response) {
      const newList = response.address;
      localStorage.setItem("userAddress", JSON.stringify(response.address));
      setAddresses(newList);
    }
  }, [response]);

  const getAddresses = () => {
    fireRequest({
      method: "get",
      url: "/api/user/address",
      headers: { authorization: token },
    });
  };

  const addAddress = (address) => {
    fireRequest({
      method: "post",
      url: "/api/user/address",
      headers: { authorization: token },
      data: { address },
    });
  };

  const removeAddress = (address) => {
    fireRequest({
      method: "delete",
      url: `/api/user/address/${address._id}`,
      headers: { authorization: token },
    });
  };

  const updateAddress = (address) => {
    fireRequest({
      method: "post",
      url: `/api/user/address/${address._id}`,
      headers: { authorization: token },
      data: { address },
    });
  };

  const getDefaultAddress = (addresses) => {
    return addresses.filter((address) => address.defaultAddrs === true)[0];
  };

  return (
    <Address.Provider
      value={{
        addresses,
        addAddress,
        removeAddress,
        updateAddress,
        getDefaultAddress,
        getAddresses,
      }}
    >
      {children}
    </Address.Provider>
  );
};

const useAddress = () => useContext(Address);

export { useAddress, AddressContext };
