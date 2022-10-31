import React from "react";
import { Link } from "react-router-dom";
import seniphoto from "../../assets/seni.png";
import detailseniphoto from "../../assets/detailseni.jpg";
import "./Detail.css";

function Detailseni() {
  return (
    <>
      <div>
        <div className="header">
          <img src={seniphoto} alt="" />
        </div>
        <div className="detail-text-button">
          <p>Edit</p>
          <p>Delete</p>
        </div>
        <div className="img-right">
          <img src={detailseniphoto} alt="" />
        </div>

        <main>
          <div className="all-content">
            <div className="left-content">
              <button>Novel</button>
              <h4 style={{fontSize: "18px"} }>
                SEBUAH SENI UNTUK BERSIKAP BODO AMAT
              </h4>
              <p>13 September 2016</p>
            </div>
            <div className="right-content">
              <p style={{paddingLeft:"30rem"}}>Available</p>
            </div>
          </div>
          <div className="content">
            <div className="text-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, maxime natus. Suscipit ullam assumenda debitis
                incidunt reiciendis cupiditate ab earum maiores rem eveniet
                saepe, unde dolorem asperiores, odio natus animi. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolorem
                reprehenderit illo quibusdam doloribus excepturi dicta unde?
                Repellendus est incidunt libero at officiis maxime alias beatae,
                nesciunt maiores veritatis suscipit quae!
              </p>
            </div>
            <div className="button-right">
              <button>Borrow</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Detailseni;
