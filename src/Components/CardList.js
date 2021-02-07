import React from "react";
import Card from "./Card";
const CardList = ({ robotsProfiles }) => {
	return (
		<div className='warper'>
			<div className='outer'>
				{robotsProfiles.map((profile, index) => {
					const { name, email, id } = profile;
					return <Card key={index} name={name} email={email} id={id} />;
				})}
			</div>
		</div>
	);
};

export default CardList;
