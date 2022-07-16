import "./CSS/profile.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export function Profile() {
  const { userAuthState } = useAuth();
  const { fullName, email } = userAuthState;

  return (
    <main className="profile flex-center padding-h-l">
      <div>
        <div className="profileInfo flex-center padding-l">
          <i className="badge fa-solid fa-circle-user fa-2xl"></i>
          <div>
            <p>{fullName}</p>
            <span className="small">{email}</span>
          </div>
          <button className="btn btn-ol-accent">Log Out</button>
        </div>
        <nav className="tabs flex-space-even">
          <h2>
            <Link to="address">Address</Link>
          </h2>
          <h2>
            <Link to="orders">Orders</Link>
          </h2>
        </nav>
        <Outlet />
      </div>
    </main>
  );
}
