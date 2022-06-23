import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./CSS/login.css";
import { useAuth } from "../Context/AuthContext";
import { ACTION_TYPE } from "../Utils/constants";

export default function Login() {
  const { dispatchUserAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { LOGIN } = ACTION_TYPE;
  const initialCredentialState = {
    name: "",
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentialState);

  const testLoginHandler = () => {
    setCredentials({
      name: "test",
      email: "testuser@gmail.com",
      password: "Testuser123",
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    loginHandler();
  };

  const loginHandler = async () => {
    console.log(credentials);
    try {
      const loginResp = await axios.request({
        method: "post",
        url: "/api/auth/login",
        data: {
          email: credentials.email,
          password: credentials.password,
        },
      });
      if (loginResp.status === 200) {
        dispatchUserAuth({
          type: LOGIN,
          payload: loginResp,
        });

        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <section className="formContainer">
        <form onSubmit={formHandler}>
          <h1>Login</h1>
          <div className="form-fields">
            <input
              type="email"
              required={true}
              name="email"
              placeholder="username@email.com"
              defaultValue={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
            <input
              type="password"
              required={true}
              name="password"
              placeholder="************"
              defaultValue={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              className="btn btn-ol-accent"
              onClick={testLoginHandler}
            >
              Login with Test Credentials
            </button>
            <h3>
              New User?
              <Link to="/Signup">
                <span className="txt-highlight"> SignUp here...</span>
              </Link>
            </h3>
          </div>
        </form>
      </section>
    </div>
  );
}
