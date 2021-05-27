import React from 'react';
import Navbar from './NavComponent/Navbar';
import Button from './Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div>
			<Navbar />
			<div className="hero-login">
				<p className="heroText">
					Download our App and get persnoalized guidance at every step
				</p>
				<form className="ui form login-form">
					<div className="field form-field">
						<input type="text" name="email" placeholder="Email" />
					</div>

					<div className="field">
						<input type="password" name="password" placeholder="Password" />
					</div>
					<div className="ui checked checkbox">
						<input type="checkbox" />
						<label>Show password</label>
					</div>
					<div>
						<Link to="/home">
							<Button styleBtn="loginBtn" buttonTxt="Login" />
						</Link>
					</div>
				</form>
			</div>
			<Button styleBtn="downloadBtn" buttonTxt="Download App" />
		</div>
	);
};

export default LoginPage;
