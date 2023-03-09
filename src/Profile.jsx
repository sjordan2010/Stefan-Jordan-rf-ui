import React from 'react';
import NavLogo from './assets/NavLogo.png';
import Initials from './assets/Initials.png';


export default function Profile({ event }) {
  return (
    <div className="flex-column space-between">
        <div className="flex-column">
            <img src={NavLogo} alt="mainLogo"></img>
            <img src={event.img} alt="eventLogo"></img>
        </div>
        <img src={Initials} alt="profileLogo"></img>
    </div>
  )
}