import React from 'react';
import Navbar from './Navbar';

const MainNavbar = () => {
	return (
		<Navbar divClass="nav-menu">
			<a className="item" href="/home#">
				Home
			</a>

			<div className="ui simple dropdown drop1">
				Learning Spaces<i className="dropdown icon"></i>
				<div className="menu">
					<div className="item">Coursework</div>
					<div className="item">Practice Test</div>
					<div className="item">Resources</div>
				</div>
			</div>

			<div className="ui simple dropdown drop1">
				Resources<i className="dropdown icon"></i>
				<div className="menu">
					<a href="/resources" className="item">
						International <br />
						admissions update
					</a>

					<div className="item">Videos</div>
					<div className="item">Ebooks</div>
					<div className="item">Brochures</div>
					<div className="item">Test / Quiz</div>
				</div>
			</div>

			<a className="item" href="/progress#">
				Progress Dashboard
			</a>
			<a className="item" href="/AdmissionServices#">
				Admission Services
			</a>
			<a className="item" href="/askQuestion#">
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
