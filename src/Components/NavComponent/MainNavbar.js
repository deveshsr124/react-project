import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
	return (
		<Navbar divClass="nav-menu">
			<a className="item" href="/home">
				Home
			</a>

			<div className="ui dropdown">
				Learning Spaces<i className="dropdown icon"></i>
			</div>
			<Link to="/resources">
				<div className="ui simple dropdown">
					Resources<i className="dropdown icon"></i>
				</div>
			</Link>
			<a className="item" href="/">
				Progress Dashboard
			</a>
			<a className="item" href="/AdmissionServices">
				Admission Services
			</a>
			<a className="item" href="/AskQuestions">
				Ask a question
			</a>
			<i className="far fa-bell"></i>
			<div className="ui dropdown">
				<i className="fas fa-user-circle"></i>
				<i className="dropdown icon"></i>
			</div>
		</Navbar>
	);
};

export default MainNavbar;
