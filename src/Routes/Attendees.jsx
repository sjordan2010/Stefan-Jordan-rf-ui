import React from 'react';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
import PersonPortal from '../assets/PersonPortal.png';
import { useOutletContext } from "react-router-dom";


export default function Attendees() {

const [event, setEventInfo] = useOutletContext()

	return (
		<div>
			<header className="selection-header flex align-center">
				<img src={PersonPortal}></img>
				<p>Attendee</p>
			</header>
			<div>
				<div className="steps-container flex-column">
					<Step1 event={event} />
					<Step2 event={event} setEventInfo={setEventInfo} />
					<Step3 event={event} />
				</div>
			</div>
		</div>
	)
}