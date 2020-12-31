import React from 'react';
import { NavLink } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import './nav.scss';

const Nav = () => {
  const token = localStorage.getItem('token');
  const links = token ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <nav>
      <NavLink className="logo" to="/cars">AutoMobiles</NavLink>
      <div>
        <ul className="links">{links}</ul>
      </div>
    </nav>
  );
}
export default Nav;