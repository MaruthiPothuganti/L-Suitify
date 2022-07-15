import "./modal.css";

export function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="btnGroup">
          <button className="btn-ol-primary" onClick={handleClose}>
            Apply
          </button>
          <button className="btn-primary" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
