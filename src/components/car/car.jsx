import React from "react";
import "./car.css";
import d1 from "../../assets/car/Frame 17 (3).svg";
import d2 from "../../assets/car/kiiia 1.svg";
import bgcarvideo from "../../assets/car/video.mp4";

export default function Car() {
  return (
    <div className="wrapp-car" id="car">
      <video autoPlay loop muted className="background-video">
        <source src={bgcarvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlayy"></div> 
      <div className="container-car">
        <div className="title-car">
          <img src={d1} alt="" />
        </div>
        <div className="car-content">
          <div className="car-text">
            <div>
              На нашем киберспортивном турнире мы с гордостью будем использовать инновационный электромобиль KIA EV9.
            </div>
            <div>
              Этот передовой автомобиль способен раздавать электричество, что позволяет нам питать компьютеры и оборудование прямо с его батареи. Благодаря KIA EV9, мы обеспечим стабильное и надежное энергоснабжение, необходимое для бесперебойного проведения соревнований.
            </div>
          </div>
          <div className="car-img">
            <img src={d2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
