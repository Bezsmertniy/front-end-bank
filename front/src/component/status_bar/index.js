import "./index.css";
import React, { useState, useEffect } from "react";
import cellImage from "../../component/media/cell.svg";
import wifiImage from "../../component/media/wifi.svg";
import batImage from "../../component/media/bat.svg";

export default function STATUS_BAR() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="status_bar">
      <div>{currentTime}</div>
      <span>
        <img src={cellImage} alt="Cellular icon" />
        <img src={wifiImage} alt="Wi-Fi icon" />
        <img src={batImage} alt="Battery icon" />
      </span>
    </header>
  );
}
