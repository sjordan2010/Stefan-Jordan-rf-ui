import React, { useState } from 'react'

export default function NavBar({ event, formattedDate, navLinks, selected, setSelected }) {
    const links = Object.keys(navLinks)
    const [highlighted, setHighlighted] = useState(selected);

    const handleSelection = (e) => {
        setSelected(prev => prev = e.target.innerHTML)
    }
  return (
    <nav>
        <h4>{event.eventTitle}</h4>
        <div>
            {event.location} || {formattedDate}
        </div>
        <input type="search" placeholder="Search"></input>

        <ul>
            <li onClick={handleSelection}>Guide</li>
            <li onClick={handleSelection}>Attendees</li>
                <ul>
                    <li>Attendees</li>
                    <li>Attendee types</li>
                    <li>Packages</li>
                    <li>Reg codes</li>
                    <li>Discounts</li>
                </ul>
            <li onClick={handleSelection}>Content</li>
            <li onClick={handleSelection}>Exhibitors</li>
        </ul>
    </nav>
  )
}