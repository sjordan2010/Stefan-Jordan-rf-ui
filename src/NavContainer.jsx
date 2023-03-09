import React from 'react'
import NavBar from './NavBar'
import Profile from './Profile'

export default function NavContainer({ event, formattedDate, setSelected, navLinks }) {
    console.log('navLinks', navLinks)

  return (
    <div className="nav-container flex">
        <Profile event={event} />
        <NavBar event={event} formattedDate={formattedDate} setSelected={setSelected} navLinks={navLinks} />
    </div>
  )
}