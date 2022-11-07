import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data/data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // handle indexes
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    // no more items -> return to 0
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoplay
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    // cleanup
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {data.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (personIndex === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </div>
      <button
        className="prev"
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        <FiChevronLeft />
      </button>
      <button
        className="next"
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        <FiChevronRight />
      </button>
    </section>
  );
}

export default App;
