import React from "react";
import "./banner.css";
import Header from "../header/header";
import dd from "../../assets/car/Kia tittle.svg";
import Timer from "../timer/timer";
import sp from "../../assets/banner/sanarip.svg";
import bgasia from "../../assets/asiamall beck.svg";

export default function Banner() {
  return (
    <div>
      {/* <Header/> */}

      <main className="banner" style={{ background: `url(${bgasia})` }}>
        {/* <div className="title-mm"></div> */}
        <div className="sanarip-img">        
          <img className="sanarip" src={sp} />
        </div>
        <div className="tt">
          <img src={dd} alt="" />
        </div>
        {/* <div className="intro"> */}
        {/* <div className="big-logo"></div> */}
        {/* </div> */}
        <Timer />
      </main>
    </div>
  );
}
