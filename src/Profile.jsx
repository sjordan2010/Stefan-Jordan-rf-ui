import React, { useState }from 'react';
import NavLogo from './assets/NavLogo.png';
import Initials from './assets/Initials.png';


export default function Profile({ event, formattedDate, navLinks, selected, setSelected }) {
    const links = Object.keys(navLinks)
    const [highlighted, setHighlighted] = useState(selected);

    const handleSelection = (e) => {
        setSelected(prev => prev = e.target.innerHTML)
    }
  return (
    <div className="flex">
        <div className="profile flex-column space-between">
            <div className="flex-column">
                {/* <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                    <label for="openSidebarMenu" class="sidebarIconToggle">
                        <div class="spinner diagonal part-1"></div>
                        <div class="spinner horizontal"></div>
                        <div class="spinner diagonal part-2"></div>
                    </label>
                </input> */}
                <img className="nav-img" src={NavLogo} alt="mainLogo"></img>
                <img className="event-img" src={event.img} alt="eventLogo"></img>
            </div>
            <img className="profile-img" src={Initials} alt="profileLogo"></img>
        </div>
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
    </div>
  )
}