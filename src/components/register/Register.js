import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import welcome from "../../assets/welcome.png";
import logo from "../../assets/bookshelf.png";
import "./Register.css"

const Register = () => {
  const [person, setPerson] = useState({
    userName: '',
    fullName: '',
    email: '',
    password : ''
  })

  const handleSignup = (e) =>{
    e.preventDefault()
    alert('Berhasil terdaftar')
    localStorage.setItem('USER_LOGIN', JSON.stringify(person))
    localStorage.getItem('USER_LOGIN')
    
  }
  
  useEffect(() =>{
    // console.log(person.userName)
    // console.log(person.fullName)
    // console.log(person.email)
    // console.log(person.password)
  }, [person])

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
        <Link to={"/home"}><img src={logo} alt="" width="80px" /></Link> 
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

                <form className="form">
                  <div className="input-box">
                    <div className="input">
                      <label htmlFor="username">Username</label>
                      <br />
                      <input type="text" id="username" placeholder="Enter Username" onChange={(e) => setPerson({...person, userName: e.target.value})}/>
                    </div>
                    <div className="input">
                      <label htmlFor="fullname">Full Name</label>
                      <br />
                      <input type="text" id="fullname" placeholder="Enter Your Full Name" onChange={(e) => setPerson({...person, fullName: e.target.value})} />
                    </div>
                    <div className="input">
                      <label htmlFor="email">Email</label>
                      <br />
                      <input type="email" id="email" placeholder="example@gmail.com" onChange={(e) => setPerson({...person, email: e.target.value})} />
                    </div>
                    <div className="input">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input type="password" id="password" placeholder="Enter Password" onChange={(e) => setPerson({...person, password: e.target.value})}/>
                    </div>
                  </div>
                  <div className="button">
                    <button onClick={handleSignup} className="btn-signup">
                      <Link to={"/register"}>Sign Up</Link>
                    </button>
                    <button  className="btn-login">
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