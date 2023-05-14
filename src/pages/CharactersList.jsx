import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel--zsy52dpjc444.code.run/characters"
        );
        // console.log(response.data);
        setCharacters(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  return isLoading ? (
    <p>😩 Loading 😩</p>
  ) : (
    <div>
      {characters.map((character) => {
        return (
          <Link
            key={character.comics}
            to={`https://site--marvel--zsy52dpjc444.code.run/${character._id}`}
          >
            <h2>{character.name}</h2>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <p>{character.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
