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
                <img className="nav-img" src={NavLogo} alt="mainLogo"></img>
                <img className="event-img" src={event.img} alt="eventLogo"></img>
            </div>
            <img className="profile-img" src={Initials} alt="profileLogo"></img>
        </div>
    </div>
  )
}