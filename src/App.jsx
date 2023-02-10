import { useState } from "react";
import data from "./data/data";
import Article from "./Article";
import { useEffect } from "react";

function App() {
  // load dark theme by default
  const [theme, setTheme] = useState("dark-theme");

  // run effect whenever theme changes
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <main>
      <nav className="nav-center">
        <h1>overreacted</h1>
        <button onClick={toggleTheme} className="btn">
          toggle
        </button>
      </nav>
      <section className="articles">
        {data.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;
