import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import isLoggedIn from '../../utils'
const Nav = ({ login }) => {

  const links = login.isLoggedIn ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <nav>
      <NavLink to="/">AutoFinder</NavLink>
      <div>
        <ul className="navbar-nav ml-auto">{links}</ul>
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
