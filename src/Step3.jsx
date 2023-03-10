import React from 'react';
import Shape from "./assets/Shape.png";

export default function Step3({ event }) {

	const portal = event.nav.Attendees.step3;
	
	return (
		<div className="ind-step-container flex-column">
			<header>Step 3: <span className="light-text">Design post-registration experiences.</span></header>
			<div className="workflow border">   
				<header><img src={Shape}/>{portal.title}</header>
				<p>{portal.description}</p>
			</div>
		</div>
	)
}