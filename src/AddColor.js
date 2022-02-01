import { useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = { background: color };
  // const colorList = ["orange" , "crimson" , "cyan"];
  const [colorList, setColorList] = useState(["orange", "crimson", "cyan"]);
  return (
    <div>
      {/* <input
                  value={color} placeholder = "Enter a color" style = {styles}
                  onChange = {(event) => setColor(event.target.value)}
                  /> */}

      {/* material input */}
      <TextareaAutosize
        aria-label={color}
        placeholder="Enter a color"
        style={styles}
        onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColorList([...colorList, color])}>AddColor</button>
      {colorList.map((clr) => (<ColorBox cool={clr} />))}

    </div>
  );
}
export function ColorBox({ cool }) {
  const styles = {
    height: "20px",
    width: "200px",
    background: cool,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
