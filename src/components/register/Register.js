import { Link } from "react-router-dom";
import welcome from "../../assets/welcome.png";
import logo from "../../assets/bookshelf.png";
import "./Register.css"

const Register = () => {
  return (
    <div className="container-register">
      <div className="img-content">
        <div>
          <h2>Book is a window to the world</h2>
        </div>
        <img src={welcome} alt="" />
      </div>
      <div className="login-content">
        <div className="logo">
          <img src={logo}alt="" width="80px" />
        </div>

        <div className="semua">
          <div className="form-all">
            <div className="form-login">
              <div className="title">
                <div>
                  <div className="login">
                    <h2>Register</h2>
                    <p>Welcome Back, Please Register to create account</p>
                  </div>
                </div>

                <form action="" className="form">
                  <div className="input-box">
                    <div className="input">
                      <label for="">Username</label>
                      <br />
                      <input type="text" placeholder="Enter Username" />
                    </div>
                    <div className="input">
                      <label for="">Full Name</label>
                      <br />
                      <input type="text" placeholder="Enter Your Full Name" />
                    </div>
                    <div className="input">
                      <label for="">Email</label>
                      <br />
                      <input type="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="input">
                      <label for="">Password</label>
                      <br />
                      <input type="password" placeholder="Enter Password" />
                    </div>
                  </div>
                  <div className="button">
                    <button type="submit" className="btn-signup">
                      <Link to={"/register"}>Sign Up</Link>
                    </button>
                    <button type="submit" className="btn-login">
                      <Link to={"/"}>Login</Link>
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

export default Register