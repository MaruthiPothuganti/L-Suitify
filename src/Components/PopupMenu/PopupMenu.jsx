import "./popupmenu.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function PopupMenu({ handleClose, show }) {
  const { pathname } = useLocation();
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const routes = [
    { name: "HomePage", path: "/" },
    { name: "Products", path: "/ProductListing" },
    { name: "WishList", path: "/Wishlist" },
    { name: "Cart", path: "/Cart" },
    { name: "Profile", path: "/Profile" },
  ];

  return (
    <div className={showHideClassName}>
      <section className="popup-main">
        <div className="btnContainer">
          <button className="closeButton" onClick={() => handleClose(false)}>
            <i class="fa-regular fa-rectangle-xmark fa-2xl"></i>
          </button>
        </div>
        <div className="linkPills">
          {routes.map((route) => {
            return (
              <Link to={route.path}>
                <h2
                  style={
                    pathname === route.path
                      ? {
                          background: "lightgray",
                          color: "white",
                          padding: "0.5rem",
                          borderRadius: "0.5rem",
                        }
                      : { padding: "0.5rem", borderRadius: "0.5rem" }
                  }
                  onClick={() => handleClose(false)}
                >
                  {route.name}
                </h2>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

{
  /* <Link to="/">
            <h2
              style={
                pathname === "/"
                  ? {
                      background: "lightgray",
                      color: "white",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                    }
                  : null
              }
              onClick={() => handleClose(false)}
            >
              HomePage
            </h2>
          </Link>
          <Link to="/ProductListing">
            <h2 onClick={() => handleClose(false)}>Products</h2>
          </Link>
          <Link to="/Wishlist">
            <h2 onClick={() => handleClose(false)}>Wishlist</h2>
          </Link>
          <Link to="/Cart">
            <h2 onClick={() => handleClose(false)}>Cart</h2>
          </Link>
          <Link to="/Profile">
            <h2 onClick={() => handleClose(false)}>Profile</h2>
          </Link> */
}
