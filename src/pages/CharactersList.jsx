import {useEffect, useState} from "react";
import axios from "axios";

const CharactersList = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=jZHCwAvMJLbKEUaU"
				);
				console.log(response.data);
				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error.message);
			}

			setIsLoading(false);
		};
		fetchData();
	}, []);

	return isLoading ? <p>Loading ..</p> : <h1>ListPersonnage</h1>;
};

export default CharactersList;
