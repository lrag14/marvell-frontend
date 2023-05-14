import { useEffect, useState } from "react";
import axios from "axios";

const ComicsList = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--zsy52dpjc444.code.run/characters`
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
    <div>
      {data.results.map((comicbd, index) => {
        return (
          <article key={index}>
            <h2>{comicbd.title}</h2>
            <img
              src={comicbd.thumbnail.path + "." + comicbd.thumbnail.extension}
              alt={comicbd.title}
            />
            <p>{comicbd.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ComicsList;
