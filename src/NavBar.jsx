import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        {/* HAVE TO DESCTRUCTURE isActive & isPending */}

            <NavLink to="/guide">{ 
                ({ isActive, isPending }) =>  isActive ? <li className="active">Guide</li> : 
                    isPending ? <li className="pending">Guide</li> : 
                            <li>Guide</li>
                }
            </NavLink>
            <NavLink to="/attendees">
                {
                ({ isActive, isPending }) =>  isActive ? <li className="active">Attendees</li> : 
                isPending ? <li className="pending">Attendees</li> : 
                            <li>Attendees</li>
                }
            </NavLink>
                <ul className="sub-list">
                    <li>Attendees</li>
                    <li>Attendee types</li>
                    <li>Packages</li>
                    <li>Reg codes</li>
                    <li>Discounts</li>
                </ul>
            <NavLink to="/content">
                {
                ({ isActive, isPending }) =>  isActive ? <li className="active">Content</li> : 
                isPending ? <li className="pending">Content</li> : 
                            <li>Content</li>
                }
            </NavLink>
            <NavLink to="/exhibitors">
                {
                ({ isActive, isPending }) =>  isActive ? <li className="active">Exhibitors</li> : 
                isPending ? <li className="pending">Exhibitors</li> : 
                            <li>Exhibitors</li>
                }
            </NavLink>
          
        </ul>
    </nav>
  )
}