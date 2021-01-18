import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import './nav.scss';

function Nav({ auth }) {
  const links = auth.isLoggedIn ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <nav>
      <NavLink className="logo" to="/cars">AutoMobiles</NavLink>
      <div>
        <ul className="links">{links}</ul>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(Nav);
