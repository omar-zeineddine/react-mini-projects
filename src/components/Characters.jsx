// import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const Characters = () => {
  //   const [characters, setCharacters] = useState([]);

  //   const fetchCharacters = async () => {
  //     const response = await fetch("https://rickandmortyapi.com/api/character");
  //     const data = await response.json();
  //     console.log(data);
  //     setCharacters(data.results);
  //   };

  //   useEffect(() => {
  //     fetchCharacters();
  //   }, []);

  // refactor - use react query
  // useQuery requires a unique query key for caching purposes

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  };

  // data, and status of request
  const { data, status } = useQuery("characters", fetchCharacters);

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      {characters.map((character) => {
        return <div>{character.name}</div>;
      })}
    </div>
  );
};

export default Characters;
