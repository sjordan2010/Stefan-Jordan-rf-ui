import React from 'react';
import RegWorkflow from './RegWorkflow';
import Arrow from "./assets/Arrow.png";
import Plus from "./assets/Plus.png";

export default function Step2() {
  return (
    <div className="ind-step-container flex-column">
        <header><strong>Step 2: </strong><span className="light-text">Build registration workflows.</span></header>
        <div className="workflow-container flex">
            <div className="workflow border">
                <header><img src={Arrow}/>Attendee Registration</header>
                <p>Start by creating a general registration workflow.</p>
            </div>
            <div className="workflow border">
                <header><img src={Arrow}/>Attendee Registration</header>
                <p>Start by creating a general registration workflow.</p>
            </div>
            <div className="workflow border">
                <header><img src={Arrow}/>Attendee Registration</header>
                <p>Start by creating a general registration workflow.</p>
            </div>
            <div className="workflow border">
                <header><img src={Arrow}/>Attendee Registration</header>
                <p>Start by creating a general registration workflow.</p>
            </div>
            <div className="workflow border">
                <header><img src={Arrow}/>Attendee Registration</header>
                <p>Start by creating a general registration workflow.</p>
            </div>
        </div>
        <div className="add-workflow border flex-column align-center just-center">
            <img src={Plus}/>
            <header>Add Registration Workflow</header>
        </div>
    </div>
  )
}