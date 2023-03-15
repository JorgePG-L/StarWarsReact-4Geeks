import React,{useState, useEffect} from "react";
import {getPeople, getInfoPeople, getPlanets} from "../services/service.js";
import "../../styles/home.css";
import soldados from "../../img/soldadosImperio.jpg"
import darthVader from "../../img/darthVader.jpg"
import tatooine from "../../img/tatooine.jpg"
import planetUrb from "../../img/urbanPlanet.jpg"


export const Home = () => {

	const [people, setPeople] = useState([])
	const [state2, setState2] = useState("");

	const [planets, setPlanets] = useState([]);

	async function getDataFromFunction(){
		const dataFromFetch = await getPeople()
		setPeople(dataFromFetch.results)		
	}

	async function getSingleData(){
			const dataFromFetch = await getInfoPeople(2)
			console.log(dataFromFetch)
			setState2(dataFromFetch.result.description)
	}

	async function getPlanetsFromService(){
		const dataFromFetch = await getPlanets();
		setPlanets(dataFromFetch.results)
	}

	useEffect(() => {
		getDataFromFunction()
		getSingleData()
		getPlanetsFromService()
	},[])


	return(
		<div className="container mt-5">
			<div className="row people">
			{
				people.map((element, key) => 
				<div className="card" key={key}>
					 <img className="card-img-top" src={key % 2 != 0 ? soldados : darthVader} alt="Card image"></img>
					<h5 className="card-title">{element.name}</h5>
					<p className="card-text">{state2}</p>
					<div className="card-footer">
						<button className="btn btn-success">More Info</button>
						<button className="btn btn-warning">Add to Chart</button>			
					</div>
				</div>)
			}
			</div>
			<div className="row planets">
				{
					planets.map((element, key) => 
						<div className="card" key={key}>
							<img className="card-img-top" src={key % 2 != 0 ? tatooine : planetUrb} alt="Card image"></img>
							<h5 className="card-title">{element.name}</h5>
							<p className="card-text">{state2}</p>
							<div className="card-footer">
								<button className="btn btn-success">More Info</button>
								<button className="btn btn-warning">Add to Chart</button>			
							</div>
						</div>)
				}
			</div>		
		</div>
	)
};
