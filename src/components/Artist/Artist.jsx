import React from "react";
import "./../Artist/Artist.css";
import borderImg from "./../../Assets/Images/Vector 1.png";
import vector2 from "./../../Assets/Images/Vector 2.png";
import vector3 from "./../../Assets/Images/Vector 3.png";
import { cardsData } from "../../utils/data";

const Artist = () => {
  return (
    <div id="artist" className="artist">
      <div className="row">
        {cardsData.map((item, index) => (
          <div
            className="artist-inner col-md-4 col-sm-12 text-center mb-5"
            key={index}
          >
            <div className="inner-inner">
              <img
                src={vector2}
                alt="vector2"
                className="vector2-img img-fluid"
              />
              <img
                src={borderImg}
                alt="borderImg"
                className="border-img img-fluid"
              />
              <img src={vector3} alt="vector3" className="vector3-img" />
            </div>
            <div className="inner-contents text-white">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img src={item.img} alt="img" className="img-fluid" />
                    <p>{item.text}</p>
                </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Artist;
