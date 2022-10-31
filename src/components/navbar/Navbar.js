import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/bookshelf.png";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <div className="header-menu">
        <nav>
          <div className="all">
            <p>All Categories</p>
            <p>All Time</p>
          </div>
          <div className="search">
            <div className="box-search">
              {/* <span className="material-symbols-outlined"> search </span> */}
              <div className="search-icon">
                <CgSearch />
              </div>
              <input type="search" className="btn-search" />
            </div>
          </div>
          <div className="logo">
          <Link to={"/home"}><img src={logo} alt=""/> </Link> 
            <h4>Library</h4>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
