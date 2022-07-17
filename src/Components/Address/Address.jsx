import "./address.css";
import { useState } from "react";
import { useAddress } from "../../Context/AddressContext";
import { AddressModal } from "../AddressModal/AddressModal";

export const Address = () => {
  const { addresses } = useAddress();
  const [isAddressModalOpen, setIsAddressModal] = useState(false);

  return (
    <div className="flex-column-center">
      <AddressModal
        show={isAddressModalOpen}
        handleClose={setIsAddressModal}
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
              {address.default ? (
                <span className="defAddress">default</span>
              ) : (
                ""
              )}
            </h2>
            <h3>
              {address.houseNo}, {address.city}, {address.city}, {address.state}
              , {address.country}, {address.mobile}, {address.ZIP}.
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
