import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';
import CardList from './CardComponent/CardList';

const ResourcesPage = () => {
	return (
		<div>
			<MainNavbar />
			<SecondNavbar
				headertxt="Resources for GRE"
				firstItem="Study Materials"
				SecondItem=" Webinars"
			/>
			<div className="btn-cont">
				<div className="btn-holder">Ebook (About Tesla)</div>
				<div className="btn-holder">Quant Formula List</div>
				<div className="btn-holder">Grammar Rules</div>
				<div className="btn-holder">Vocubulary List</div>
			</div>
			<h2 className="heading">Recommended Universities</h2>
			<CardList />
		</div>
	);
};

export default ResourcesPage;
