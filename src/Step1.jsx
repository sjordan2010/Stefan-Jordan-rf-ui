import React from 'react'

export default function Step1({ event }) {

    const { settings, general } = event.nav.Attendees.step1;
    // const general = event.nav.Attendees.step1.general;
    console.log('settings', settings, 'general', general)


  return (
    <div className="ind-step-container flex-column">
        <header><strong>Step 1: </strong><span className="light-text">Base settings.</span></header>
        <div className="step1 border flex">
            <div className="setting flex-column">
                <header>{general.title}</header>
                <p>{general.description}</p>
            </div>
            {settings.map((el, i) => (
                <Setting key={i} title={el.title} description={el.description} />
            ))}
        </div>
    </div>
  )
}

function Setting({ title, description }) {
    return (
        <div className="setting">
        <header>{title}</header>
        <p>{description}</p>
    </div>
    )
}