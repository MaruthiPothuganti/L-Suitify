import "./CSS/login.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { ACTION_TYPE } from "../Utils/constants";
import { toast } from "react-toastify";

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
        console.log(loginResp);
        dispatchUserAuth({
          type: LOGIN,
          payload: loginResp,
        });
        toast.success(
          `Welcome ${loginResp.data.foundUser.firstName} ${loginResp.data.foundUser.lastName}`
        );
        navigate(from, { replace: true });
      }
    } catch (error) {
      setCredentials(initialCredentialState);
      if (error.response.status === 404) {
        toast.error("User Not Found");
      } else if (error.response.status === 401) {
        toast.error("Invalid credentials");
      } else if (error.response.status === 408) {
        toast.error("Request Timeout. Try Again");
      } else if (error.response.status === 500) {
        toast.error("Internal Server Error.Please Try after Some Time");
      }
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
