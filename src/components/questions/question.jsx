import React, { useState } from "react";
import "./question.css"; // Убедитесь, что этот файл существует и содержит необходимые стили
import logo from "../../assets/header/llogo.svg";

import f1 from "../../assets/org/Link.svg";
import f2 from "../../assets/org/Link (1).svg";
import f3 from "../../assets/org/Link (2).svg";
import f4 from "../../assets/org/Container.svg";

import bgq from "../../assets/banner/bgquest.svg";

const questions = [
  {
    question: "Что такое KIA Cyberchamp?",
    answer:
      "Kia Cyberchamp - это киберспортивный турнир, организованный компанией Kia. В нем участвуют команды, соревнующиеся в различных популярных киберспортивных дисциплинах. Этот турнир проводится впервые и собирает команды со всего Бишкека.",
  },
  {
    question: "Где будут проходить матчи?",
    answer:
      "Отборочные этапы турнира будут проводиться на территории торгового центра Bishkek Park. Финальные матчи пройдут на мероприятии которое состоится 16-17 августа.",
  },
  {
    question: "Считается ли киберспорт профессией?",
    answer:
      "Да, киберспорт считается полноценной профессией, он имеет свою инфраструктуру, включая команды, тренеров, менеджеров и аналитиков.",
  },
  {
    question: "Кто может стать участником?",
    answer:
      "Участвовать могут все желающие команды. Подробности об участниках можно узнать на официальном сайте турнира",
  },
  {
    question: "Где я могу следить за расписанием и узнавать результаты матчей?",
    answer:
      "На нашем сайте Вы можете посмотреть расписание, результаты матчей и прямые эфиры.",
  },
  {
    question: "Где я могу наблюдать за игрой?",
    answer:
      "Трансляции всех матчей турнира Kia Cyberchamp будут доступны на популярных платформах стриминга, таких как Twitch и YouTube.  Ссылки на трансляции будут опубликованы на официальном сайте и в социальных сетях турнира.",
  },
  {
    question: "Где мне связаться с вами?",
    answer:
      "Вы можете связаться с нами написав нам на почту kiacyberchamp@gmail.com.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${bgq})` }}
      ></div>
      <div className="overlay"></div>
      <div className="faq-content">
        <h1 className="faq-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
        <div className="faq">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleAccordion(index)}
                className="faq-question"
              >
                {item.question}
              </button>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        {/* <footer className="footer">
                    <img src={logo} alt="Footer" className="footer-image" />
                    <div className="social-icons">
                        <img src={f1} alt="Facebook" />
                        <img src={f2} alt="YouTube" />
                        <img src={f3} alt="Instagram" />
                    </div>
                </footer> */}
      </div>
    </div>
  );
};

export default FAQ;
