import { useState } from 'react';
import './styles/App.scss';
import NavContainer from './components/NavContainer';
import { sampleEvent } from './mocks/eventMock';
import Title from './components/Title';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [event, setEvent] = useState(sampleEvent); // TODO RF-1234: replace with BE data

  return (
    <main className="app-container flex">
      <NavContainer event={event} />
      <div className="main-container">
        <Title event={event} setEvent={setEvent} />
        <Outlet context={[event, setEvent]} />
      </div>
    </main>
  );
}
