import React, { useState } from 'react';
import Navbar from './NavComponent/Navbar';
import Button from './Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	const [userRegistration, setUserRegistration] = useState({
		username: '',
		email: '',
		password: '',
	});
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		setUserRegistration({ ...userRegistration, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem('document', JSON.stringify(userRegistration));
	};
	return (
		<div>
			<Navbar
				navClass="navtext"
				navText="already have account ?"
				divClass="rightside"
			>
				<Link to="/login">
					<Button styleBtn="navbtn" buttonTxt="Login" />
				</Link>
			</Navbar>

			<div className="hero">
				<p className="heroText">
					We are ready to set up your free trial of Manya Education
				</p>
				<form onSubmit={handleSubmit} className="ui form form-container">
					<div className="field">
						<input
							type="text"
							name="username"
							placeholder="First Name"
							value={userRegistration.username}
							onChange={handleChange}
						/>
					</div>
					<div className="field">
						<input
							type="email"
							name="email"
							placeholder="Email Address"
							value={userRegistration.email}
							onChange={handleChange}
						/>
					</div>
					<div className="field">
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={userRegistration.password}
							onChange={handleChange}
						/>
					</div>
					<div className="field">
						<select className="ui dropdown">
							<option value="">Which state you are in ?</option>
						</select>
					</div>
					<div className="field">
						<select className="ui dropdown">
							<option value="">Centre</option>
						</select>
					</div>
					<div className="field">
						<select className="ui dropdown">
							<option value="">Test</option>
						</select>
					</div>
					<div className="field checkbox-cont">
						<div className="ui checked checkbox">
							<input type="checkbox" />
							<label>
								Send News and updates related to study abroad via email
							</label>
						</div>
						<div className="ui checked checkbox">
							<input type="checkbox" />
							<label>Call me for a free demo counselling session</label>
						</div>
					</div>
					<Link to="/register">
						<Button styleBtn="nextBtn" buttonTxt="Next" type="submit" />
					</Link>
				</form>
			</div>
		</div>
	);
};

export default LandingPage;
