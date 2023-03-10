import React from 'react';
import RegWorkflow from './RegWorkflow';
import Plus from "./assets/Plus.png";

export default function Step2({ event }) {

    const workflows = event.nav.Attendees.step2

    const addWorkflow = () => {
        alert('add a workflow');
    }

    return (
    <div className="ind-step-container flex-column">
        <header><strong>Step 2: </strong><span className="light-text">Build registration workflows.</span></header>
        <div className="workflow-container flex">
            {workflows.map((el, i)=> (
                <RegWorkflow key={i} title={el.title} description={el.description} />
            ))}
        </div>
        <div onClick={addWorkflow} className="add-workflow border flex-column align-center just-center">
            <img src={Plus}/>
            <header>Add Registration Workflow</header>
        </div>
    </div>
  )
}