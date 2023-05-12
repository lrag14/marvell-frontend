import React, { useState, useEffect } from "react";
import axios from "axios";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel--zsy52dpjc444.code.run/comics"
        );
        setComics(response.data.results);
      } catch (error) {
        console.log(error.message);
      }

      setIsLoading(false);
    };

    fetchComics();
  }, []);

  return isLoading ? (
    <p>Loading ..</p>
  ) : (
    <article>
      <h1>Comics</h1>
      <div className="comics-list">
        {comics.map((comic) => (
          <div className="comic" key={comic.id}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ComicsList;
