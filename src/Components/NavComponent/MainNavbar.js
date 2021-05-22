import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
	return (
		<Navbar divClass="nav-menu">
			<Link to="/home">
				<a className="item">Home</a>
			</Link>
			<div className="ui dropdown">
				Learning Spaces<i className="dropdown icon"></i>
			</div>
			<div className="ui simple dropdown">
				Resources<i className="dropdown icon"></i>
				<div class="menu">
					<Link to="/resources">
						<div class="item">Resources for GRE</div>
					</Link>
				</div>
			</div>
			<a className="item">Progress Dashboard</a>
			<a className="item">Admission Services</a>
			<a className="item">Ask a question</a>
			<i className="far fa-bell"></i>
			<div className="ui dropdown">
				<i className="fas fa-user-circle"></i>
				<i className="dropdown icon"></i>
			</div>
		</Navbar>
	);
};

export default MainNavbar;
