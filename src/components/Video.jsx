import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        src="https://res.cloudinary.com/dxkxvfo2o/video/upload/
v1608169738/video1_cvrjfm.mp4"
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter />
    </div>
  );
};
export default Video;
