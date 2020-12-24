import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
const Nav = ({login}) => {

    const links = login.isLoggedIn ? <LoggedInLinks /> : <LoggedOutLinks />;
    return (
      <Navbar fixed="top" className="navbar navbar-expand-lg navbar-light" data-set="nav-bar-test">
        <NavLink className="navbar-brand" to="/" data-set="nav-bar-brand-test">
          AutoFinder
        </NavLink>

        <div className="collapse navbar-collapse align-rt" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">{links}</ul>
        </div>
      </Navbar>
    );
}


const mapStateToProps = state => ({
  login: state.login,
});

export default connect(
  mapStateToProps,
  null,
)(Nav);
// export default Nav;