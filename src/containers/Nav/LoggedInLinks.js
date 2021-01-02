import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../redux/actions/actionCreators';
import './loggedin.scss';

function LoggedInLinks() {
  const logOut = () => {
    localStorage.removeItem('token');
    logOutUser();
  };
  return (
    <div className="links">
      <NavLink className="nav-link" to="/cars">
        Cars
      </NavLink>
      <NavLink className="nav-link" to="/favorites">
        Favorites
      </NavLink>
      <NavLink className="nav-link" onClick={logOut} to="/">
        Logout
      </NavLink>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser()),
});
const mapStateToProps = state => ({
  login: state.loginUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(LoggedInLinks);
