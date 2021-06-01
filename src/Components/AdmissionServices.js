/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import CardList from './CardComponent/CardList';
import SecondNavbar from './NavComponent/SecondNavbar';
import SearchBar from './SearchComponent/SearchBar';
import Popup from './PopComponent/Popup';
import './style.css';
import Slider from 'react-slick';
import { Select } from '@chakra-ui/react';
import Button from './Button';

const AdmissionServices = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 2,
	};
	const [buttonProp, setButtonprop] = useState(false);
	const [timedPopup, setTimedPopup] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setTimedPopup(true);
		}, 3000);
	}, []);

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

			<Popup trigger={timedPopup}>
				<button
					className="closeBtn"
					type="submit"
					onClick={() => setTimedPopup(false)}
				>
					<i className="fas fa-times"></i>
				</button>
				<p className="popup-header">
					Tell us little bit about yourself so that we can help you in your
					journey
				</p>
				<div className="field1">
					<Select
						color="white"
						placeholder="Select you level of education"
						size="lg"
						className="select-field"
					/>
					<br />
					<Select
						color="white"
						placeholder="Discipine of interest"
						size="lg"
						className="select-field"
					/>
					<br />
					<Select
						color="white"
						placeholder="Destination"
						size="lg"
						className="select-field"
					/>
					<br />
					<Button styleBtn="submitBtn" buttonTxt="Submit" type="submit" />
				</div>
			</Popup>
		</div>
	);
};

export default AdmissionServices;
