/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import CardList from './CardComponent/CardList';
import SecondNavbar from './NavComponent/SecondNavbar';
import './style.css';

const Home = () => {
	return (
		<div>
			<MainNavbar />
			<SecondNavbar
				headertxt="Admission Services"
				firstItem="Search For University"
				SecondItem="Counselor"
				ThirdItem="Schedulor"
				FourthItem="Packages and Services"
			/>
			<h1 className="center-text">
				Find your Dream
				<br /> University or Course
			</h1>
			<div class="ui search search-box">
				<div class="ui left icon input">
					<i class="search icon"></i>
					<input
						class="prompt"
						type="text"
						placeholder="Search for University , Course or destination country"
					/>
				</div>
			</div>
			<div className="or-text">OR</div>
			<p className="other-text">
				Connect to our Admission Counselor for free counselling
			</p>
			<h2 className="heading">Top Universities</h2>
			<CardList />
		</div>
	);
};

export default Home;
