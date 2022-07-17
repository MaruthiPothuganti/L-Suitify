import "./address.css";
import { useState } from "react";
import { useAddress } from "../../Context/AddressContext";
import { AddressModal } from "../AddressModal/AddressModal";

export const Address = () => {
  const { addresses } = useAddress();
  const [isAddressModalOpen, setIsAddressModal] = useState(false);

  const initialAddressState = {
    // _id: null,
    fullName: "",
    mobile: "",
    houseNo: "",
    city: "",
    state: "",
    country: "",
    ZIP: "",
    default: false,
  };
  const [addrss, setAddrss] = useState(initialAddressState);

  const updateHandler = (address) => {
    setIsAddressModal(true);
    console.log(address);
    setAddrss(address);
  };

  return (
    <div className="flex-column-center">
      <AddressModal
        show={isAddressModalOpen}
        handleClose={setIsAddressModal}
        addrss={addrss}
        setAddrss={setAddrss}
        initialAddressState={initialAddressState}
      ></AddressModal>
      <div className="padding-m">
        <button className="btn-primary" onClick={() => setIsAddressModal(true)}>
          + Add Address
        </button>
      </div>
      <div className="flex-column-center">
        {addresses.map((address) => (
          <div
            className="addressCard"
            key={address._id}
            onClick={() => updateHandler(address)}
          >
            <h2>
              {address.fullName}{" "}
              {address.default ? (
                <span className="defAddress">default</span>
              ) : (
                ""
              )}
            </h2>
            <h3>
              {address.houseNo}, {address.city}, {address.state},{" "}
              {address.country}, {address.mobile}, {address.ZIP}.
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
