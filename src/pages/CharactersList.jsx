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
          `https://site--marvel--zsy52dpjc444.code.run/characters?`
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
    <div className="main">
      <div className="characters-container">
        {characters
          .filter((character) => {
            // Filtre les sans photo////////without Picture
            return (
              character.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            );
          }) // puis .map sur le reste
          .map((character) => {
            return (
              <div key={character._id} className="character-card">
                <h1>{character.name}</h1>
                <Link
                  to={`https://site--marvel--zsy52dpjc444.code.run/${character._id}`}
                >
                  <div className="character-info">
                    <div className="character-image">
                      <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                      />
                    </div>
                    <div className="character-description">
                      <p>{character.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CharactersList;
