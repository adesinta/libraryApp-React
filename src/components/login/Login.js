import { Link } from "react-router-dom";
import welcome from "../../assets/welcome.png";
import logo from "../../assets/bookshelf.png";
import "./Login.css"

const Login = () => {
  return (
    <div className="container">
      <div className="img-content">
        <div>
          <h2>Book is a window to the world</h2>
        </div>
        <img src={welcome} alt="" />
      </div>
      <div className="login-content">
        <div className="logo">
          <img src={logo} alt="" width="80px" />
        </div>
        <div className="semua">
          <div className="form-all">
            <div className="form-login">
              <div className="title">
                <div>
                  <div className="login">
                    <h2>Login</h2>
                    <p>Welcome Back, Please Login to your account</p>
                  </div>
                </div>

                <form action="" className="form">
                  <div className="input-box">
                    <div className="input">
                      <label for="">Email</label>
                      <br />
                      <input type="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="input">
                      <label for="">Password</label>
                      <br />
                      <input
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <div className="remember">
                    <input type="checkbox" name="" id="checkbox" />
                    <label for="ingat" className="rmb-txt">
                      Remember me
                    </label>
                    <Link to={"/"} className="forget-pwd">
                      Forgot Password
                    </Link>
                  </div>
                  <div className="button">
                    <button type="submit" className="btn-login">
                      <Link to={"/"}>Login</Link>
                    </button>
                    <button type="submit" className="btn-signup">
                      <Link to={"/register"}>Sign Up</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="pr">
            <p>
              By signing up, you agree to Book's
              <span>Terms and Conditions</span> & <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
