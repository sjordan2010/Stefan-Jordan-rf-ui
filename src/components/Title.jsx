import { useFormattedDate } from '../utils/dateParsers';

export default function Title({ event, setEvent }) {
  const date = useFormattedDate(event);

  const handleClick = () => {
    setEvent((prev) => ({
      ...prev,
      eventTitle: 'Changed the event title',
    }));
    alert('edit info on Title.jsx - Line 6');
  };

  return (
    <section className="title-container flex-column">
      <div className="flex top-title">
        <img src={event.img} alt=""></img>
        <div className="flex-column title-middle">
          <h1>{event.eventTitle}</h1>
          <div>
            <h3>{date}</h3>
            <h3>{event.location}</h3>
          </div>
        </div>
        <div>
          <button className="edit-btn" onClick={handleClick}>
            Edit event
          </button>
        </div>
      </div>
      <div>
        <h2>Event setup guide</h2>
        <p>
          See the available list of modules below. We suggest that you start with the attendee
          model.
        </p>
      </div>
    </section>
  );
}
