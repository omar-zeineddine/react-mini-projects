import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

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

  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      // dynamically add page
      `https://rickandmortyapi.com/api/character?=${queryKey[1]}`
    );
    return response.json();
  };

  // data, and status of request
  // recommendation to pass page number through useQuery hook
  const { data, status } = useQuery(["characters", page], fetchCharacters);

  console.log("data:", data);

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <h2>Error...</h2>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
};

export default Characters;
