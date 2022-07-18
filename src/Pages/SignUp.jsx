import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  return (
    <div className="login">
      <section className="formContainer">
        <form>
          <h1>Sign Up</h1>
          <div className="form-fields">
            <input type="text" name="userName" placeholder="UserName" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <h3>
              Already an User?
              <Link to="/Login">
                <span className="txt-highlight"> Login here...</span>
              </Link>
            </h3>
          </div>
        </form>
      </section>
    </div>
  );
}
