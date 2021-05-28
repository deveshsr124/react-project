/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import CardList from './CardComponent/CardList';
import SecondNavbar from './NavComponent/SecondNavbar';
import SearchBar from './SearchComponent/SearchBar';
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
				route="/search"
			/>
			<h1 className="center-text">Find your Dream University or Course</h1>
			<SearchBar boxCont="search-box" />

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
