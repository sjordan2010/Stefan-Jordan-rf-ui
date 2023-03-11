import NavLogo from '../../public/NavLogo';
import ProfileLogo from '../../public/ProfileLogo';
import { Link } from 'react-router-dom';

export default function Profile({ eventImage }) {
  return (
    <section className="flex">
      <div className="profile flex-column space-between">
        <div className="flex-column">
          <NavLogo className="nav-img" />
          <img className="event-img" src={eventImage} alt=""></img>
        </div>
        <Link to="/profile">
          <ProfileLogo className="profile-img" />
        </Link>
      </div>
    </section>
  );
}
