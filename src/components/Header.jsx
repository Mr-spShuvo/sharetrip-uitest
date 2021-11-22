import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { Link, NavLink } from 'react-router-dom';

import { MenuIcon, SpinWheelIcon } from '../assets/icons';
import { ReactComponent as Logo } from '../assets/logo.svg';

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
  return (
    <header class="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <nav className="header__nav">
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
      </div>
    </header>
  );
};
