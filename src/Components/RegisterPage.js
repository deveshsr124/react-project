import React from 'react';
import Button from './Button';
import Navbar from './NavComponent/Navbar';

const RegisterPage = () => {
	return (
		<div>
			<Navbar />
			<div className="hero">
				<p className="heroText">
					Download our App and get persnoalized guidance at every step
				</p>
				<form className="ui form form-cont">
					<div className="field form-field">
						<label className=" labelTxt">
							Tell us little about yourself so that we can help you in your
							journey
						</label>
						<input
							type="text"
							name="first-name"
							placeholder="When do you plan to take GRE"
						/>
					</div>

					<div className="field">
						<select className="ui dropdown">
							<option value="">What is your graduation year</option>
						</select>
					</div>
				</form>
			</div>
			<span>
				<Button styleBtn="downloadBtn" buttonTxt="Download App" />
				<Button styleBtn="registerBtn" buttonTxt="Register" />
			</span>
		</div>
	);
};

export default RegisterPage;
