import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import './nav.scss';
// import isLoggedIn from '../../utils'

const Nav = ({ login }) => {

  const links = login.isLoggedIn ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <nav>
      <NavLink className="logo" to="/">AutoFinder</NavLink>
      <div>
        <ul className="links">{links}</ul>
      </div>
    </nav>
  );
}


const mapStateToProps = state => ({
  login: state.login,
});

export default connect(
  mapStateToProps,
  null,
)(Nav);
