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
			<div
				class="uk-divider-vertical"
				style={{
					height: '30px',
					marginLeft: '0px',
					marginRight: '0px',
					marginBottom: '5px',
					marginTop: '5px',
					color: 'blue',
					width: '15px',
				}}
			></div>
			<div className="ui simple dropdown drop2">
				<i className="fas fa-user-circle"></i>
				<i className="dropdown icon"></i>
				<div className="left menu">
					<div className="item">My profile</div>
					<div className="item">My notes</div>
					<div className="item item3">
						Shortlisted Courses <br />
						and Universities
					</div>
					<div className="item">Planner</div>
					<div className="item">Settings</div>
					<div className="item">Sign out</div>
				</div>
			</div>
		</Navbar>
	);
};

export default MainNavbar;
