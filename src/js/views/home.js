import React,{useState, useEffect} from "react";
import getPeople from "../services/service";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const [state, setState] = useState([])

	async function getDataFromFunction(){
		const dataFromFetch = await getPeople()
		console.log(dataFromFetch.results)
		setState(dataFromFetch.results)		
	}

	useEffect(() => {
		getDataFromFunction()
	},[])


	return(
		<div className="text-center mt-5">
			{
				state.map((element, key) => <h5>Hello {element.name}</h5>)
			}
		</div>
	)
};
