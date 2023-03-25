import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/starwarsLogo.jpg"
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<img className="logo" src={logo}></img>
			</Link>
			<div className="ml-auto">
				<ul className="navbar-nav">
					<li className="nav-item dropdown dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
						Favourite Cart  
						<span className="itemOnCart">{actions.getFromCart()}</span>
						<ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
							{
								store.cartas.map((element, index) => {
									return(
										<li>{element}</li>
									)
								})
							}
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
