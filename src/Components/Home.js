/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';

import './style.css';

const Home = () => {
	const cardData = [
		{
			Id: Math.random(),
			header: 'University search tool',
			inside: 'Could your ideal course be in Australia, New zealand, Germany ?',
		},
		{
			Id: Math.random(),
			header: 'Test Prep ',
			inside:
				'Prepare and excel in GRE, GMAT, SAT, IELTS, TOEFL, and other standardized tests.',
		},
		{
			Id: Math.random(),
			header: 'University search tool',
			inside: 'Could your ideal course be in Australia, New zealand, Germany ?',
		},
	];
	return (
		<div>
			<MainNavbar />
			<h1 className="headerTxt">Hello Rahul</h1>
			<h2 className="subText">Quick Access</h2>
			<div className="card-container" key={cardData.Id}>
				{cardData.map((data) => {
					return (
						<div className="card-1">
							<div className="card-head">{data.header}</div>
							<p className="inside-text">{data.inside}</p>
						</div>
					);
				})}
			</div>
			<h2 className="list-Text">Important Dates</h2>
			<ul className="list-items">
				<li>25 May: Last date for SAT applications </li>
				<li>25 May: Last date to apply for scholarship at Yale </li>
				<li>25 May: Last date to apply for internship has been extended</li>
			</ul>
			<h2 className="resources-text">Resources</h2>
			<div className="resources-cont">
				<div className="resource-1"></div>
				<div className="resource-1"></div>
				<div className="resource-1"></div>
			</div>
		</div>
	);
};

export default Home;
