import { useState } from 'react'
import './App.scss'
import MainContainer from './MainContainer'
import NavContainer from './NavContainer'
import MountainLogo from './assets/MountainLogo.png'

export default function App() {

  const event = {
      eventTitle: "RainFocus Summit",
      date: new Date("December 15, 2023"),
      location: "Lehi, Utah",
      img: MountainLogo,
      nav: {
          Attendees: {
            title: "attendee",
            step1: {
              general: {
                title: "General",
                description: "blah blah blah"
              },
              settings: [
                { title: "Title", description: "1sample description for step 1" },
                { title: "Title2", description: "2another sample description for step 1" },
                { title: "Title3", description: "3another sample description for step 1" },
                { title: "Title4", description: "4another sample description for step 1" },
              ]
            },
            step2: [
              { title: "1 Attendee Registration", description: "1 registration workflow information goes here" },
              { title: "2 Attendee Registration", description: "2 registration workflow information goes here" },
              { title: "3 Attendee Registration", description: "3 registration workflow information goes here" },
              { title: "4 Attendee Registration", description: "4 registration workflow information goes here" },
            ],
            step3: {
              title: "Attendee Portal",
              description: "attendee portal description goes right here"
            }
          },
          Guide: {
            title: "guide"
          }
      }
  }

  const date = event.date
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const monthName = monthNames[monthIndex];
  const suffix = getDaySuffix(day);
  const formattedDate = `${monthName} ${day}${suffix}`;

  function getDaySuffix(day) {
    if (day === 11 || day === 12 || day === 13) {
      return 'th';
    }
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }


  const [selected, setSelected] = useState("attendee");
  const [eventInfo, setEventInfo] = useState(event)


  return (
    <div className="app-container flex">
      <NavContainer setSelected={setSelected} formattedDate={formattedDate} event={event} navLinks={event.nav} />
      <MainContainer formattedDate={formattedDate} event={eventInfo} setEventInfo={setEventInfo} />
    </div>
  )
};