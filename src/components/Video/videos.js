import React from "react";
import { AiFillEye } from "react-icons/ai";
import "./_video.scss";
export const Video = () => {
  return (
    <div className="videos">
      <div className="videos_Top">
        <img src="https://i.ytimg.com/vi/y1wS38w5RpA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB302hHp2u8XY_HbgOFB_jqjCjBlg" />
        <div >05.00</div>
      </div>
      <div className="videos_title">Spider-Man  in Danger</div>
      <div className="videos_details">
        <AiFillEye />
          100m Views •1 days ago
      </div>
      <div className="videos_Channel">
        <img src="https://i.annihil.us/u/prod/marvel/logo/Marvel_Logo_RGB.png" alt="" />
        <p>Made For Fun</p>
      </div>
    </div>
  );
};
