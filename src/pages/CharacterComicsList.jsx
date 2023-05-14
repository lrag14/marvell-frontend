import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterComicsList = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--zsy52dpjc444.code.run/comics?characterId=${id}`
        );
        setComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComics();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {comics.map((comic) => (
            <article key={comic.id}>
              <h2>{comic.title}</h2>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <p>{comic.description}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterComicsList;
