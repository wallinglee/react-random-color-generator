import { useState, useEffect } from "react";
import './styles.css';

function RandomColor() {
  const [color, setColor] = useState("#FFFFFF");
  const [colorType, setColorType] = useState("hex");

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  }

  const generateHexColor = () => {
    const validHexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += validHexValues[randomNumber(validHexValues.length)];
    }
    setColor(hexColor);
  }

  const generateRgbColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  const changeColorType = (type) => {
    setColorType(type);
    if(type === "hex"){
      generateHexColor()
    } else {
      generateRgbColor();
    }
  };

  useEffect(() => {
    changeColorType(colorType);
  }, [colorType]);

  return (
    <div className="random-color" style={{background: color}}>
      <h1>Random Color Generator</h1>
      <nav>
        <button
          onClick={() => changeColorType("hex")}
          className={"random-color-button " + (colorType==="hex" ? "active" : "")}
        >
          HEX
        </button>
        <button
          onClick={() => changeColorType("rgb")}
          className={"random-color-button " + (colorType==="rgb" ? "active" : "")}
        >
          RGB
        </button>
      </nav>

      <h2>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h2>
      <h2>{color}</h2>
    </div>
  );
}

export default RandomColor;