import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [err, setErr] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("log");
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={() => setColor(e.target.value)}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <div className="container">
          <h4>here be list</h4>
        </div>
      </section>
    </>
  );
}

export default App;
