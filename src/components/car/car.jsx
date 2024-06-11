import React from "react";
import "./car.css";

import d1 from "../../assets/car/Frame 1 (1).svg";
import d2 from "../../assets/car/kia-ev9-car-04 1.svg";
import bgcar from "../../assets/car back.svg";

export default function Car() {
  return (
    <div>
      <div className="title-car">
        <img src={d1} alt="" />
      </div>
      <div
        className="wrapp-car"
        id="car"
        style={{ backgroundImage: `url(${bgcar})` }}
      >
        <div className="coneiner-car">
          <div className="car-content">
            <div className="car-text">
              <div>
                Погружаясь в мир Kia EV9 — передового электрического
                внедорожника на платформе E-GMP. Этот автомобиль обладает
                запасом хода до 500 км на одной зарядке, мощностью до 400 л.с. и
                быстрой зарядкой до 80% за 30 минут.
              </div>
              <div>
                Созданный для впечатляющей производительности и экологической
                чистоты, Kia EV9 идеально сочетается с турниром Kia CYBERCHAMP,
                где передовые технологии встречаются с амбициями киберспортивных
                чемпионов.
              </div>
              <div id="abs3">
                Откройте для себя будущее с Kia EV9 и присоединяйтесь к нам на
                пути к инновациям и страсти к соревнованиям!
              </div>
              {/* <div>Кроме того, использование электромобиля снижает углеродный след и способствует защите окружающей среды. KIA EV9 предоставляет нам гибкость в организации турниров, позволяя проводить мероприятия в любых местах без привязки к стационарным источникам энергии.</div> */}
            </div>
            <div className="car-img">
              <img src={d2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
