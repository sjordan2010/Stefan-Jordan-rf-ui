import { NavLink } from 'react-router-dom';
import Bullet from '../../public/Bullet';
import { useFormattedDate } from '../utils/dateParsers';
import Search from '/Search.png';

export default function NavBar({ event }) {
  const date = useFormattedDate(event);

  return (
    <nav>
      <h1>{event.eventTitle}</h1>
      <div>
        <h2>
          {event.location} • {date}
        </h2>
      </div>
      <div className="search-container">
        <img src={Search}></img>
        <input type="search" placeholder="Search"></input>
      </div>

      <ul>
        <StyledNavLink title="Guide" />
        <StyledNavLink title="Attendees" />
        <ul className="sub-list">
          <li> Attendees</li>
          <li>Attendee types</li>
          <li>Packages</li>
          <li>Reg codes</li>
          <li>Discounts</li>
        </ul>
        <StyledNavLink title="Content" />
        <StyledNavLink title="Exhibitors" />
      </ul>
    </nav>
  );
}

function StyledNavLink({ title }) {
  return (
    <NavLink to={`/${title.toLowerCase()}`}>
      {(renderProps) => (
        <li className={getClassName(renderProps)}>
          <Bullet />
          {title}
        </li>
      )}
    </NavLink>
  );
}

const getClassName = ({ isActive, isPending }) => {
  if (isActive) return 'active';
  if (isPending) return 'pending';
  return '';
};
