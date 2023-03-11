import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import { useOutletContext } from 'react-router-dom';
import PersonPortal from '../../public/PersonPortal';

export default function Attendees() {
  const [event, setEvent] = useOutletContext();

  return (
    <section>
      <header className="selection-header flex align-center">
        <PersonPortal />
        <p>Attendee</p>
      </header>
      <div>
        <div className="steps-container flex-column">
          <Step1 event={event} />
          <Step2 event={event} setEvent={setEvent} />
          <Step3 {...event.nav.Attendees.step3} />
        </div>
      </div>
    </section>
  );
}
