import { useEffect, useState } from "react";
import axios from "axios";

const ComicsList = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--zsy52dpjc444.code.run/comics`
        );

        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log("inthecatch");
      }
    };
    fetchData();
  }, []);
  return isloading ? (
    <p>😩 Loading 😩</p>
  ) : (
    <div className="main">
      <div className="characters-container">
        {data.results.map((comic) => {
          return (
            <div key={comic._id} className="character-card">
              <h1>{comic.title}</h1>

              <div className="character-info">
                <div className="character-image">
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                </div>
                <div className="character-description">
                  <p>{comic.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicsList;
