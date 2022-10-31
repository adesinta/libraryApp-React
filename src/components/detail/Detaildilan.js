import React from 'react';
import { Link } from "react-router-dom";
import Detaildilanphoto from "../../assets/detaildilan.png"
import Coverphoto from "../../assets/covernya.png"
import "./Detail.css"

function Detaildilan() {
  return (
    <>
            <div className="header">
             <img src={Detaildilanphoto} alt="" />
           </div>
           <div className="detail-text-button">
             <p>Edit</p>
             <p>Delete</p>
           </div>
           <div className="img-right">
             <img src={Coverphoto}alt="" />
           </div>

           <main>
      <div class="all-content">
        <div class="left-content">
          <button>Novel</button>
          <h4>DILAN 1990</h4>
          <p>30 Juni 2019</p>
        </div>
        <div class="right-content">
          <p>Available</p>
        </div>
      </div>
      <div class="content">
        <div class="text-content">
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
        <div class="button-right">
          <button>Borrow</button>
        </div>
      </div>
    </main>
         </>
  )
}

export default Detaildilan;
