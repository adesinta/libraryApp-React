import React, { Fragment } from 'react'


import nikiphoto from "../../assets/niki.png"


const Sidebar = () => {
  return (
    <Fragment>
         <div className="side-bar">
         <div id='check' className='burger-menu' >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='tes'>
            <img src={nikiphoto} alt=""/>
            <h4>Niki Zefanya</h4>
          </div>
          <div className="isi-sidebar">
              <p>Explore</p>
              <p>History</p>
              <p>Add Book*</p>
          </div>
          </div>
    </Fragment>
  );
};

export default Sidebar