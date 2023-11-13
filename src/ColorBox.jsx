// Further Study

import "./ColorBox.css";
import { useState } from "react";

export default function () {
  const randomColor = () => Math.floor(Math.random() * 256);

  const randomRGB = () =>
    `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

  const [color, setColor] = useState("#483d8b");

  const changeColor = () => {
    setColor(randomRGB);
  };

  return (
    <div
      onClick={changeColor}
      className="ColorBox"
      style={{ backgroundColor: color }}
    ></div>
  );
}
