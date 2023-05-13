import { useEffect, useState } from "react";
import axios from "axios";

const CharactersList = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/personnages");
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
      {data.results.map((personnage) => {
        return (
          <article key={personnage._id}>
            <h2>{personnage.name}</h2>
            <img
              src={
                personnage.thumbnail.path + "." + personnage.thumbnail.extension
              }
              alt={personnage.name}
            />
            <p>{personnage.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default CharactersList;
