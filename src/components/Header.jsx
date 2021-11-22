import Icon from '@mdi/react';
import { mdiAccount, mdiClose, mdiMenu } from '@mdi/js';
import { Link, NavLink } from 'react-router-dom';

import { MenuIcon, SpinWheelIcon } from '../assets/icons';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { useState } from 'react';

const menu = [
  { title: 'Flight', path: '/flight' },
  { title: 'Bus', path: '/bus' },
  { title: 'Hotel', path: '/hotel' },
  { title: 'Holiday', path: '/holiday' },
  { title: 'Visa', path: '/visa' },
  { title: 'Visa Guide', path: '/visa-guide' },
  { title: 'Group Request', path: '/group-request' },
  { title: 'Travel Advisory', path: '/travel-advisory' },
  { title: 'Promotions', path: '/promotions' },
  { title: 'Blog', path: '/blog' }
];

export const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMobileMenu = () => setIsMobileMenu(!isMobileMenu);

  return (
    <header class="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <nav className={`header__nav ${isMobileMenu ? 'active' : ''}`}>
          <ul className="header__menu">
            {menu.map(item => (
              <li key={item.path} className="header__menu__item">
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
          <div className="header__actions">
            <Link to="/spin">
              <SpinWheelIcon /> Spin To Win
            </Link>
            <Link to="/account">
              <span>
                <Icon path={mdiAccount} />
              </span>
              <MenuIcon />
            </Link>
          </div>
        </nav>
        <button onClick={handleMobileMenu} className="header__mobile-menu">
          {isMobileMenu ? <Icon path={mdiClose} size={2} /> : <Icon path={mdiMenu} size={2} />}
        </button>
      </div>
    </header>
  );
};
