import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import "./index.css";

function App() {
  const [color, setColor] = useState("");
  const [err, setErr] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // generate tint & shade
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${err ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, idx) => {
          console.log(color);
          return (
            <SingleColor
              key={idx}
              {...color}
              index={idx}
              hexColor={color?.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
