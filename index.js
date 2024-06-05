import React, { useEffect, useState } from 'react';
import './style.css';
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const containers = document.querySelectorAll('.main-container > div');
    function showCurrentContainer() {
      containers.forEach((container, index) => {
        if (index === currentIndex) {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    }
    function nextContainer() {
      setCurrentIndex(prevIndex => (prevIndex + 1) % containers.length);
      const containerWidth = containers[0].offsetWidth;
      const newPosition = currentIndex * containerWidth;
      document.querySelector('.main-container').scrollLeft = newPosition;
      showCurrentContainer();
    }
    const intervalId = setInterval(nextContainer, 3000);
    showCurrentContainer();
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return /*#__PURE__*/React.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, "\u0422\u0423\u0420\u041D\u0418\u0420 \u0412 \u0426\u0418\u0424\u0420\u0410\u0425"), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "million"
  }, /*#__PURE__*/React.createElement("span", {
    className: "red"
  }, "1 000  000"), " \u0441\u043E\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, "\u041F\u0440\u0438\u0437\u043E\u0432\u043E\u0439 \u0444\u043E\u043D\u0434 \u0442\u0443\u0440\u043D\u0438\u0440\u0430"))), /*#__PURE__*/React.createElement("div", {
    className: "imh"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/svg/CS win.svg",
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "red"
  }, "50"), " \u043A\u043E\u043C\u0430\u043D\u0434"), /*#__PURE__*/React.createElement("div", {
    className: "info-2"
  }, "500+ \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
    className: "img-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/svg/CS tour.svg",
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "red-3"
  }, "25"), " +"), /*#__PURE__*/React.createElement("div", {
    className: "info-3"
  }, "\u0421\u041F\u041E\u041D\u0421\u041E\u0420\u041E\u0412")), /*#__PURE__*/React.createElement("div", {
    className: "img-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/svg/Screen.svg",
    alt: ""
  }))));
}
export default App;
