import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {getPeople, getInfoPeople, getPlanets, getVehicles, getImgCharacter} from "../services/service.js";
import "../../styles/home.css";
import soldados from "../../img/soldadosImperio.jpg"
import darthVader from "../../img/darthVader.jpg"
import tatooine from "../../img/tatooine.jpg"
import planetUrb from "../../img/urbanPlanet.jpg"
import { element } from "prop-types";


export const Home = () => {

	const [people, setPeople] = useState([])
	const [state2, setState2] = useState("");

	const [planets, setPlanets] = useState([]);
	const [vehicle, setVehicle] = useState([]); 
	const [image, setImage] = useState();

	async function getImgFromService(){
		const dataFromFetch = await getImgCharacter()
		console.log(typeof dataFromFetch)
		setImage(dataFromFetch.url)
	}

	async function getDataFromFunction(){
		const dataFromFetch = await getPeople()
		setPeople(dataFromFetch.results)		
	}

	async function getSingleData(){
			const dataFromFetch = await getInfoPeople(2)
			setState2(dataFromFetch.result.description)
	}

	async function getPlanetsFromService(){
		const dataFromFetch = await getPlanets();
		setPlanets(dataFromFetch.results)
	}

	async function getVehiclesFromService(){
		const dataFromFetch = await getVehicles()
		setVehicle(dataFromFetch.results);
	}


	useEffect(() => {
		getDataFromFunction()
		getSingleData()
		getPlanetsFromService()
		getVehiclesFromService()
		getImgFromService()
	},[])


	return(
		<div className="container-fluid">
				<div className="row people">
					<h2 className="titleCharacters">Star Wars Characters</h2>
					{
						people.map((element, key) => 
						<div className="card" key={key}>
						<img className="card-img-top" src={key % 2 != 0 ? soldados : darthVader} alt="Card image"></img>
						<h5 className="card-title">{element.name}</h5>
						<p className="card-text">{state2}</p>
						<div className="card-footer">
							<Link to="/demo">
							<button className="btn btn-success">More Info</button>
							</Link>
							<button className="btn btn-warning">Add to Chart</button>			
						</div>
						</div>)
					}				
				</div>
				<div className="row planets">
					<h2 className="titleCharacters">Star Wars Planets</h2>
					{
						planets.map((element, key) => 
							<div className="card" key={key}>
								<img className="card-img-top" src={key % 2 != 0 ? tatooine : planetUrb} alt="Card image"></img>
								<h5 className="card-title">{element.name}</h5>
								<p className="card-text">{state2}</p>
								<div className="card-footer">
									<Link to={"/"}>
									<button className="btn btn-success">More Info</button>
									</Link>								
									<button className="btn btn-warning">Add to Chart</button>			
								</div>
							</div>)
					}
				</div>	
				<div className="row vehicles">
					<h2 className="titleCharacters">Star Wars Vehickes</h2>
					{
						vehicle.map((element, key) => 
							<div className="card" key={key}>
								<img className="card-img-top" src={image} alt="Card image"></img>
								<h5 className="card-title">{element.name}</h5>
								<p className="card-text">{state2}</p>
								<div className="card-footer">
									<Link to={"/"}>
									<button className="btn btn-success">More Info</button>
									</Link>								
									<button className="btn btn-warning">Add to Chart</button>			
								</div>
							</div>
						)
					}

				</div>
		</div>
	)
};
