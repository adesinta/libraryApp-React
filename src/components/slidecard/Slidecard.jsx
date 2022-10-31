import React, { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import dilanPhoto from "../../assets/dilan.jpg";
import laskarPelangiPhoto from "../../assets/laskar.jpg";
import uburPhoto from "../../assets/ubur2.png";
import bodoamatPhoto from "../../assets/bersikap.png";
import reactNativePhoto from "../../assets/reactnative.png";

const Slidecard = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Slidecard;
