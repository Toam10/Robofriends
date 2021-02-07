import React from "react";
import "../Styles/Card.css";

const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className='mainContent'>
			<div
				className='roboImage'
				style={{
					backgroundImage: `url(https://robohash.org/${id}.png)`,
				}}
			></div>
			<div className='subContent'>
				<h2 className='header-2'>{name}</h2>
				<p className='paragraph-1'>{email}</p>
			</div>
		</div>
	);
};

export default Card;
