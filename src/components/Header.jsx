import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProfileBoxIcon } from '../assets/icons';

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
        <div className="header__logo">
          <Logo />
        </div>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu__item">
              {menu.map(item => (
                <NavLink key={item.path} to={item.path}>
                  {item.title}
                </NavLink>
              ))}
            </li>
          </ul>
          <div className="header__actions">
            <Link to="/spin">Spin To Win</Link>
            <Link to="/account">
              <ProfileBoxIcon />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
