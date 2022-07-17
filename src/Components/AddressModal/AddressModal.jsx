import "./addressModal.css";
import { useState } from "react";
import { useAddress } from "../../Context/AddressContext";

export function AddressModal({ handleClose, show }) {
  const initialAddressState = {
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

  const { addAddress, removeAddress, updateAddress } = useAddress();

  const showHideClassName = show
    ? "addressModal display-block"
    : "addressModal display-none";

  const formHandler = (e) => {
    e.preventDefault();
    addressHandler();
  };

  const addressHandler = () => {
    addAddress(addrss);
    handleClose(false);
    setAddrss(initialAddressState);
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form onSubmit={formHandler}>
          <div className="form-fields">
            <h1>Add New Address</h1>
            <input
              type="text"
              required={true}
              name="fullname"
              placeholder="Full Name"
              value={addrss.fullName}
              onChange={(e) => {
                setAddrss({ ...addrss, fullName: e.target.value });
              }}
            />
            <input
              type="text"
              required={true}
              name="mobileno"
              placeholder="Phone Number"
              value={addrss.mobile}
              onChange={(e) => {
                setAddrss({ ...addrss, mobile: e.target.value });
              }}
            />
            <input
              type="text"
              required={true}
              name="houseNo"
              placeholder="House Number"
              value={addrss.houseNo}
              onChange={(e) => {
                setAddrss({ ...addrss, houseNo: e.target.value });
              }}
            />
            <input
              type="text"
              required={true}
              name="city"
              placeholder="City"
              value={addrss.city}
              onChange={(e) => {
                setAddrss({ ...addrss, city: e.target.value });
              }}
            />
            <input
              type="text"
              required={true}
              name="state"
              placeholder="State"
              value={addrss}
              onChange={(e) => {
                setAddrss({ ...addrss, state: e.target.value });
              }}
            />
            <input
              type="text"
              required={true}
              name="country"
              placeholder="Country"
              value={addrss.country}
              onChange={(e) => {
                setAddrss({ ...addrss, country: e.target.value });
              }}
            />
            <input
              type="text"
              required={true}
              name="zip"
              placeholder="PinCode"
              value={addrss.ZIP}
              onChange={(e) => {
                setAddrss({ ...addrss, ZIP: e.target.value });
              }}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="btn btn-ol-accent"
              onClick={() => handleClose(false)}
            >
              Close
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
