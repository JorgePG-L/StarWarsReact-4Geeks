import React,{useState, useEffect} from "react";
import {getPeople, getInfoPeople} from "../services/service.js";
import "../../styles/home.css";
import soldados from "../../img/soldadosImperio.jpg"
import darthVader from "../../img/darthVader.jpg"
export const Home = () => {
	const [state, setState] = useState([])
	const [state2, setState2] = useState("");

	async function getDataFromFunction(){
		const dataFromFetch = await getPeople()
		setState(dataFromFetch.results)		
	}

	async function getSingleData(){
			const dataFromFetch = await getInfoPeople()
			console.log(dataFromFetch)
			setState2(dataFromFetch.result.description)
	}

	useEffect(() => {
		getDataFromFunction()
		getSingleData()
	},[])


	return(
		<div className="container mt-5">
			{
				state.map((element, key) => 
				<div className="card">
					 <img class="card-img-top" src={key % 2 != 0 ? soldados : darthVader} alt="Card image"></img>
					<h5 className="card-title">{element.name}</h5>
					<p className="card-text">{state2}</p>
					<div className="card-footer">
						<button className="btn btn-success">More Info</button>
						<button className="btn btn-warning">Add to Chart</button>			
					</div>
				</div>)
			}
		</div>
	)
};
