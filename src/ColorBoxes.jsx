// Further Study - Color Boxes

import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

export default function ColorBoxes() {
  const boxes = [];
  for (let i = 0; i < 16; i++) {
    boxes.push(<ColorBox />);
  }
  return <div className="ColorBoxesContainer">{boxes}</div>;
}
