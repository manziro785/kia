import React from "react";
import "./watch.css";

const Watch = () => {
  return (
    <div className="watch-container" id="streams">
      <h1 className="watch-title">
        ПРЯМОЙ <span>ЭФИР</span>
      </h1>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/mTzXNlACobo?si=llQFFB-b67k9loId"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/7KH9R-jYQcc?si=9pjdsZfIfzpt0K--"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/7KH9R-jYQcc?si=9pjdsZfIfzpt0K--"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
