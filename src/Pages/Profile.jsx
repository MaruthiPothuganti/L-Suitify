import "./CSS/profile.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { ACTION_TYPE } from "../Utils/constants";

export function Profile() {
  const navigate = useNavigate();
  const { userAuthState, dispatchUserAuth } = useAuth();
  const { fullName, email } = userAuthState;
  const { LOGOUT } = ACTION_TYPE;

  const logoutHandler = () => {
    dispatchUserAuth({
      type: LOGOUT,
    });

    navigate("/", { replace: true });
  };

  return (
    <main className="profile flex-center padding-h-l">
      <div>
        <div className="profileInfo flex-center padding-l">
          <i className="badge fa-solid fa-circle-user fa-2xl"></i>
          <div>
            <p>{fullName}</p>
            <span className="small">{email}</span>
          </div>
          <button className="btn btn-ol-accent" onClick={logoutHandler}>
            Log Out
          </button>
        </div>
        <nav className="tabs flex-space-even">
          <h2>
            <Link className="tab" to="address">
              Address
            </Link>
          </h2>
          <h2>
            <Link className="tab" to="orders">
              Orders
            </Link>
          </h2>
        </nav>
        <div className="ordersAndAddress">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
