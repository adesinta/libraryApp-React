import { Link } from "react-router-dom";
import "./Home.css";

import { CgSearch } from "react-icons/cg";

// Import Images/Logo
import logo from "../../assets/bookshelf.png";
import dilanPhoto from "../../assets/dilan.jpg";
import laskarPelangiPhoto from "../../assets/laskar.jpg";
import uburPhoto from "../../assets/ubur2.png";
import bodoamatPhoto from "../../assets/bersikap.png";
import reactNativePhoto from "../../assets/reactnative.png";

const Home = () => {
  return (
    <div className="container-home">
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
            <img src={logo} alt="" />
            <h4>Library</h4>
          </div>
        </nav>
      </div>
      {/* <!-- <div className="side-bar">
          <img src="./assets/niki.png" alt="">
          <div className="isi-sidebar">
              <p>Explore</p>
              <p>History</p>
              <p>Add Book*</p>
          </div>
        </div> --> */}
      <div className="content-slider">
        <div className="book-slider">
          <div className="book-card">
            <img src={dilanPhoto} alt="" className="photo-cover" />
            <div className="text-card">
              <h4>Dilan 1990</h4>
              <p>Pidi Baiq</p>
            </div>
          </div>
          <div className="book-card">
            <img src={uburPhoto} alt="" className="photo-cover" />
            <div className="text-card">
              <h4>Ubur-Ubur Lembur</h4>
              <p>Raditya Dika</p>
            </div>
          </div>
          <div className="book-card">
            <img src={laskarPelangiPhoto} alt="" className="photo-cover" />
            <div className="text-card">
              <h4>Laskar Pelangi</h4>
              <p>Andrea Hirata</p>
            </div>
          </div>
        </div>
      </div>
      <div className="list-book">
        <h3>List Book</h3>
        <div className="listbook-content">
          <div className="card-listbook">
            <img
              src={dilanPhoto}
              alt=""
              className="card-image"
              id="dilan-list"
            />
            <div className="text-listbook">
              <h4>Dilan 1990</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card-listbook">
            <img src={bodoamatPhoto} alt="" className="card-image" />
            <div className="text-listbook">
              <h4>Sebuah Seni Untuk Bersikap Bodo Amat</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="card-listbook">
            <img src={reactNativePhoto} alt="" className="card-image" />
            <div className="text-listbook">
              <h4>React Native</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
