import React from 'react';

const SearchBar = (props) => {
	return (
		<div className={`ui search ${props.boxCont}`}>
			<div className="ui left icon input">
				<i className="search icon"></i>
				<input
					className="prompt"
					type="text"
					placeholder="Search for University , Course or destination country"
				/>
			</div>
		</div>
	);
};

export default SearchBar;
