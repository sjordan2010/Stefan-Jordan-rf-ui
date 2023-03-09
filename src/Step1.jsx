import React from 'react'

export default function Step1() {
  return (
    <div className="ind-step-container flex-column">
        <header><strong>Step 1: </strong><span className="light-text">Base settings.</span></header>
        <div className="step1 border flex">
            <div className="setting flex-column">
                <header>General</header>
                <p>Define attendee types & attributes</p>
            </div>
            <div className="setting">
                <header>Title</header>
                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
            </div>
            <div className="setting">
                <header>Title</header>
                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
            </div>
            <div className="setting">
                <header>Title</header>
                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
            </div>
            <div className="setting">
                <header>Title</header>
                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
            </div>
            <div className="setting">
                <header>Title</header>
                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
            </div>
        </div>
    </div>
  )
}