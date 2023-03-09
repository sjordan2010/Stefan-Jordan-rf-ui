import React from 'react'

export default function Title({ event, formattedDate }) {
  return (
    <div className="title-container flex-column">
        <div className="flex top-title">
            <img src={event.img} alt="LOGO"></img>
            <div className="flex-column title-middle">
                <h1>{event.eventTitle}</h1>
                <div>
                    <h3>{formattedDate}</h3>
                    <h3>{event.location}</h3>
                </div>
            </div>
            <div>
                <button>Edit event</button>
            </div>
        </div>
        <div>
            <h2>Event setup guide</h2>
            <p>See the available list of modules below. We suggest that you start with the attendee model.</p>
        </div>
    </div>
  )
}