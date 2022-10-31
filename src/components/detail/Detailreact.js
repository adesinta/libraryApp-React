import React from 'react'
import { Link } from "react-router-dom";
import reactnativephoto from "../../assets/reactnative.png"
import detailreactphoto from "../../assets/detailreact.jpg"
import "./Detail.css"

function Detailreact() {
  return (
    <div>
         <div className="header">
        <img src={reactnativephoto} alt="" />
      </div>
      <div className="detail-text-button">
        <p>Edit</p>
        <p>Delete</p>
      </div>
      <div className="img-right">
        <img src={detailreactphoto} alt="" />
      </div>
  
      <main>
        <div className="all-content">
          <div className="left-content">
            <button>Novel</button>
            <h4>REACT NATIVE</h4>
            <p>30 Januari 2019</p>
          </div>
          <div className="right-content">
            <p>Available</p>
          </div>
        </div>
        <div className="content">
          <div className="text-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              maxime natus. Suscipit ullam assumenda debitis incidunt reiciendis
              cupiditate ab earum maiores rem eveniet saepe, unde dolorem
              asperiores, odio natus animi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorem reprehenderit illo quibusdam doloribus
              excepturi dicta unde? Repellendus est incidunt libero at officiis
              maxime alias beatae, nesciunt maiores veritatis suscipit quae!
            </p>
          </div>
          <div className="button-right">
            <button>Borrow</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Detailreact;