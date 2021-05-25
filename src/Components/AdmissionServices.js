/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import CardList from './CardComponent/CardList';
import SecondNavbar from './NavComponent/SecondNavbar';
import './style.css';
import Slider from 'react-slick';

const AdmissionServices = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 2,
	};
	return (
		<div>
			<MainNavbar />
			<SecondNavbar
				firstItem="Search For University"
				SecondItem="Counselor"
				ThirdItem="Schedulor"
				FourthItem="Packages and Services"
			/>
			<h1 className="center-text">
				Find your Dream
				<br /> University or Course
			</h1>
			<div className="ui search search-box">
				<div className="ui left icon input">
					<i className="search icon"></i>
					<input
						className="prompt"
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
			<Slider {...settings}>
				<CardList />
			</Slider>
		</div>
	);
};

export default AdmissionServices;
