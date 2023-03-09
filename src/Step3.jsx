import React from 'react';
import Shape from "./assets/Shape.png";

export default function Step3() {
  return (
    <div className="ind-step-container flex-column">
        <header>Step 3: <span className="light-text">Design post-registration experiences.</span></header>
        <div className="workflow border">   
            <header><img src={Shape}/>Attendee Portal</header>
            <p>Manage the portal that attendees will see after they've registered for your event.</p>
        </div>
    </div>
  )
}