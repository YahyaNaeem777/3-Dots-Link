import React from "react";
import "./../Roadmap/Roadmap.css";
import { roadMap } from "../../utils/data";
import imgs from "./../../Assets/Images/RoadmapImages/Vector 10.png";
import nextPre from './../../Assets/Images/RoadmapImages/Group 96920.png';
import group24 from './../../Assets/Images/RoadmapImages/Group 24.png';
import line from './../../Assets/Images/RoadmapImages/Line 2.png';

const Roadmap = () => {
  return (
    <div className="roadmap" id="roadmap">
      <h1 className="text-center roadmap-heading">
        Road<span>map</span>
      </h1>
      <p className="roadmap-text text-center pb-5">
        Guiding the fusion of culture, AI, and Web3 innovation
      </p>
      {roadMap.map((item, index) => (
        <>
          {item.type === "between" ? (
            <>           
            <div className="roadmap-list mb-5" key={index}>
            <img src={group24} alt="" className="list-number-img"/> <img src={line} alt="" className="list-line"/> <div className="phase-title">{item.title}</div>
              <div className="phase-content-parent d-flex" style={{position:"relative"}}>
                <div className="phase-content">
                  <ul className="text-white">
                    {item.list.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                  {/* <div> */}
                  <img src={item.img} alt="" className="list-img img-fluid" />
                  {/* </div> */}
                </div>
              <img src={imgs} alt="" style={{height:"30px", position:"absolute" , right:"-3px", top:"-5px"}}/>
              </div>
            </div>
            </>
          ) : (
            <div className="start mb-5" key={index}>
             <img src={group24} alt="" className="list-number-img"/> {index !== roadMap.length -1 && (<img src={line} alt="" className="list-line"/> )}  <div className="phase-title">{item.title}</div>
              <div className="phase-content-parent d-flex" style={{position:"relative"}}>
                <div className="phase-content ">
                  <div>
                    <img src={item.img} alt="" className="list-img img-fluid" />
                  </div>
                  <ul className="text-white">
                    {item.list.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
                <img src={imgs} alt="" style={{height:"30px", position:"absolute" , right:"-3px", top:"-5px"}}/>
              </div>
            </div>
          )}
        </>
      ))}
      <div className="mx-auto" style={{width:"113px"}}><img src={nextPre} alt="" className="img-fluid" style={{height:"30px"}}/></div>
    </div>
  );
};

export default Roadmap;
