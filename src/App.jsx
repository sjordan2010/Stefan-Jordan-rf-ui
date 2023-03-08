import './App.css'

export default function App() {

  const events = [
    {
      eventTitle: "RainFocus Summit",
      date: new Date("December 15, 2023"),
      location: {
        city: "Lehi",
        state: "UT"
      },
      img: "#",
      attendee: {
        step1: {
          general: "General",
          settings: [
            { title: "Title", description: "1sample description for step 1" },
            { title: "Title2", description: "2another sample description for step 1" },
            { title: "Title3", description: "3another sample description for step 1" },
            { title: "Title4", description: "4another sample description for step 1" },
          ]
        },
        step2: [
          { title: "1Attendee Registration", description: "1registration workflow information goes here" },
          { title: "1Attendee Registration", description: "2registration workflow information goes here" },
          { title: "1Attendee Registration", description: "3registration workflow information goes here" },
          { title: "1Attendee Registration", description: "4registration workflow information goes here" },
        ],
        step3: {
          title: "Attendee Portal",
          description: "attendee portal description goes right here"
        }
      }
    }
  ]

  return (
    <div>
      Hello RainFocus
    </div>
  )
};