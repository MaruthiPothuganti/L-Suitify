import "./popupmenu.css";

export function PopupMenu({ handleClose, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="popup-main">
        <button className="btn-primary" onClick={() => handleClose(false)}>
          close
        </button>
      </section>
    </div>
  );
}
