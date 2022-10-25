import { useState } from "react";
import data from "./data/data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear</button>
        </section>
      </main>
    </div>
  );
}

export default App;
