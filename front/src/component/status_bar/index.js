import "./index.css";
import React, { useState, useEffect } from "react";
import cellImage from "../../component/media/cell.svg";
import wifiImage from "../../component/media/wifi.svg";
import batImage from "../../component/media/bat.svg";

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentTime = () => {
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="statusbar">
      {getCurrentTime()}
      <span>
        <img src={cellImage} alt="icon" />
        <img src={wifiImage} alt="icon" />
        <img src={batImage} alt="icon" />
      </span>
    </div>
  );
}
