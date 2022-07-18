import "./addressModal.css";
import { useState } from "react";
import { useAddress } from "../../Context/AddressContext";
import { toast } from "react-toastify";

export function AddressModal({
  handleClose,
  show,
  addrss,
  setAddrss,
  initialAddressState,
}) {
  const { addAddress, updateAddress } = useAddress();
  const [error, setError] = useState(null);

  const showHideClassName = show
    ? "addressModal display-block"
    : "addressModal display-none";

  const addressHandler = () => {
    if (
      addrss.fullName !== "" &&
      addrss.mobile !== "" &&
      addrss.houseNo !== "" &&
      addrss.city !== "" &&
      addrss.state !== "" &&
      addrss.country !== "" &&
      addrss.ZIP !== ""
    ) {
      addAddress(addrss);
      toast.info("New Address Added");
      handleClose(false);
      setAddrss(initialAddressState);
    }
    setError("Please Fillout all fields");
  };

  const updateHandler = () => {
    updateAddress(addrss);
    handleClose(false);
    setAddrss(initialAddressState);
    toast.info("Address Updated");
  };

  return (
    <div className={showHideClassName}>
      <section className="addressModal-main">
        <form>
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
              value={addrss.state}
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
            {addrss._id ? (
              <input
                type="checkbox"
                name="defAdrs"
                checked={addrss.defaultAddrs === true}
                value={addrss.ZIP}
                onChange={() => {
                  setAddrss({ ...addrss, defaultAddrs: !addrss.defaultAddrs });
                }}
              />
            ) : null}
            {error ? (
              <span className="error">
                <i className="fas fa-info-circle"></i> {error}
              </span>
            ) : null}
            {addrss._id ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateHandler}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={addressHandler}
              >
                Add
              </button>
            )}
            <button
              type="button"
              className="btn btn-ol-accent"
              onClick={() => {
                setAddrss(initialAddressState);
                handleClose(false);
                setError(null);
              }}
            >
              Close
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
