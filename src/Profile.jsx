import React from 'react';
import NavLogo from './assets/NavLogo.png';
import Initials from './assets/Initials.png';
import { Link } from 'react-router-dom';


export default function Profile({ event, navLinks}) {
  


    return (
        <div className="flex">
            <div className="profile flex-column space-between">
                <div className="flex-column">
                    <img className="nav-img" src={NavLogo} alt="mainLogo"></img>
                    <img className="event-img" src={event.img} alt="eventLogo"></img>
                </div>
                <Link to="/profile"><img className="profile-img" src={Initials} alt="profileLogo"></img></Link>
            </div>
        </div>
    )
}