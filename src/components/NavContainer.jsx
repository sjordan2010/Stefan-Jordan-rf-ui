import { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Hamburger from '/hamburger.png';

export default function NavContainer({ event }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const toggleNavBar = () => {
    console.log('toggle');
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  return (
    <aside
      className={`${open ? 'navOpen' : 'navClosed'} nav-container flex`}
      ref={ref}
    >
      <Profile eventImage={event.img} />
      <NavBar event={event} />

      {open ? null : (
        <button type="button" className="toggle-nav-btn" onClick={toggleNavBar}>
          <img src={Hamburger} />
        </button>
      )}

      <button type="button" className="close-btn" onClick={toggleNavBar}>
        &times;
      </button>
    </aside>
  );
}
