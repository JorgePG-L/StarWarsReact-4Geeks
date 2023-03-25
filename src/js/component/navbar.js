import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/starwarsLogo.jpg"

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<img className="logo" src={logo}></img>
			</Link>
			<div className="ml-auto">
				<ul className="navbar-nav">
					<li className="nav-item dropdown dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
						Favourite Cart  
						<span className="itemOnCart">0</span>
						<ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
							<li>Action</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
