import "./address.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAddress } from "../../Context/AddressContext";
import { AddressModal } from "../AddressModal/AddressModal";

export const Address = () => {
  const { addresses, removeAddress } = useAddress();
  const [isAddressModalOpen, setIsAddressModal] = useState(false);

  const initialAddressState = {
    fullName: "",
    mobile: "",
    houseNo: "",
    city: "",
    state: "",
    country: "",
    ZIP: "",
    defaultAddrs: false,
  };
  const [addrss, setAddrss] = useState(initialAddressState);

  const updateHandler = (address) => {
    setIsAddressModal(true);
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
          <div className="addressCard" key={address._id}>
            <h2>
              {address.fullName}{" "}
              {address.defaultAddrs ? (
                <span className="defAddress">default</span>
              ) : (
                ""
              )}
            </h2>
            <h3>
              {address.houseNo}, {address.city}, {address.state},{" "}
              {address.country}, {address.mobile}, {address.ZIP}.
            </h3>
            <div className="addressCTA">
              <i
                className="fas fa-edit fa-xl"
                title="Edit"
                onClick={() => updateHandler(address)}
              ></i>
              <i
                className="fas fa-trash-alt fa-xl"
                title="Delete"
                onClick={() => {
                  removeAddress(address);
                  toast.info("Address Removed");
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
