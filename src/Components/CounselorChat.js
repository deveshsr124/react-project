import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';

const CounselorChat = () => {
	return (
		<div>
			<MainNavbar />
			<SecondNavbar
				firstItem="Chat with Counselor"
				SecondItem="Discussion Form"
			/>
			<div className="sidebar-details">
				<h2>Activity</h2>
				<div className="sidebar-profiles"></div>
			</div>
		</div>
	);
};

export default CounselorChat;
