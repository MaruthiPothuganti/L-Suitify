import "./addressModal.css";

export function AddressModal({ handleClose, show, children }) {
  const showHideClassName = show
    ? "addressModal display-block"
    : "addressModal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="btnGroup">
          <button className="btn-primary" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
