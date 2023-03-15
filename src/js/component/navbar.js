import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/starwarsLogo.jpg"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img className="logo" src={logo}></img>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning favouriteBtn">Favourite Card</button>
				</Link>
			</div>
		</nav>
	);
};
