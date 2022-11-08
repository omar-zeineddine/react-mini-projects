import { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return <div>{character.name}</div>;
      })}
    </div>
  );
};

export default Characters;
