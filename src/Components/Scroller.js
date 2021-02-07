import React from "react";
import "../Styles/Scroller.css";

const Scroller = (props) => {
	return (
		<div className="mainScrollerContainer" >
			<div className='scrollerContainer'>{props.children}</div>;
		</div>
	);
};

export default Scroller;
