import { useEffect, useState } from "react";
import axios from "axios";

const ComicsList = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        // console.log(response.data);
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
      {data.results.map((comicbd) => {
        return (
          <article key={comicbd._id}>
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
