import React, { useState } from "react";
import items from "./data/data";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
        </div>
        <div className="underline"></div>
        <Categories />
        <Menu />
      </section>
    </main>
  );
}

export default App;
