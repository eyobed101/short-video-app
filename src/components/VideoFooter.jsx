import React, { useEffect, useState, useRef } from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Tickers from "./Ticker";

const VideoFooter = () => {
  const marqueeRef = useRef(null);

  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@kebede</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          
        </div>
        {/* <Tickers />  */}
      </div>
     
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="video footer"
      />
   
    </div>
    
  );
};

export default VideoFooter;
