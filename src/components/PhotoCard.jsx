import React, { useState } from "react";
import "./PhotoCard.css";

const PhotoCard = ({ index }) => {
  const [liked, setLiked] = useState("far");
  const handleClick = () => {
    liked === "far" ? setLiked("fas") : setLiked("far");
  };
  return (
    <>
      <div className="card">
        <a href={`#img-${index}`}>
          <img className="img" alt=""></img>
        </a>
      </div>
      <div className="lightbox" id={`img-${index}`}>
        <a href="#" className="close"></a>
        <div className="lightbox-content">
          <img className="img-lb" alt=""></img>
          <div className="info">
            <div className="comments">Some comments</div>
            <div className="like">
              <i className={`${liked} fa-heart`} onClick={handleClick}></i>
              <input
                type="text"
                className="comments-input"
                placeholder="Type comment"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
