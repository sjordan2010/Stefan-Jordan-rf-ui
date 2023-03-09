import React, { useState } from 'react';
import Search from "./assets/Search.png";

export default function NavBar({ event, formattedDate, navLinks, selected, setSelected }) {
    const links = Object.keys(navLinks)
    const [highlighted, setHighlighted] = useState(selected);

    const handleSelection = (e) => {
        setSelected(prev => prev = e.target.innerHTML)
    }
  return (
    <nav>
        <h1>{event.eventTitle}</h1>
        <div>
            <h2>{event.location} • {formattedDate}</h2>
        </div>
        <div className="search-container">
            <img src={Search}></img>
            <input type="search" placeholder="Search"></input>
        </div>

        <ul>
            <li onClick={handleSelection}>Guide</li>
            <li onClick={handleSelection}>Attendees</li>
                <ul className="sub-list">
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