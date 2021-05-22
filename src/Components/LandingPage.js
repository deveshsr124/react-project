import React from 'react';
import Navbar from './NavComponent/Navbar';
import Button from './Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
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
				<form className="ui form form-container">
					<div className="field">
						<input type="text" name="first-name" placeholder="First Name" />
					</div>
					<div className="field">
						<input
							type="email"
							name="email-address"
							placeholder="Email Address"
						/>
					</div>
					<div className="field">
						<input type="password" name="password" placeholder="Password" />
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
				</form>
			</div>
			<Link to="/next">
				<Button styleBtn="nextBtn" buttonTxt="Next" />
			</Link>
		</div>
	);
};

export default LandingPage;
