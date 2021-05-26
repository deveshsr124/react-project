import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';
import CounselorCard from './CardComponent/CounselorCard';
import './style.css';

const AskQuestion = () => {
	return (
		<div>
			<MainNavbar />
			<SecondNavbar
				firstItem="Chat with counselor"
				SecondItem="Discussion Forum"
			/>
			<h1 className="centerTxt">
				Connect with any of our experts for your query or question
			</h1>
			<h2 className="counselorTxt">Our counselors and experts</h2>

			<CounselorCard />
		</div>
	);
};

export default AskQuestion;
