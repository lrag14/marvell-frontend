import { useEffect, useState } from "react";
import axios from "axios";

const CharactersList = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ..</p>
  ) : (
    <div>
      {data.results.map((character) => {
        return (
          <article key={character.id}>
            <h2>{character.name}</h2>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
            />
          </article>
        );
      })}
    </div>
  );
};

export default CharactersList;
