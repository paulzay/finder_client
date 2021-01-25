import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOutUser } from '../../redux/actions/actionCreators';
import './loggedin.scss';

function LoggedInLinks(props) {
  const logOut = () => {
    localStorage.removeItem('token');
    const { logOutUser: userLogout } = props;
    userLogout();
  };
  return (
    <div className="links">
      <NavLink className="nav-link" to="/cars">
        Cars
      </NavLink>
      <NavLink className="nav-link" to="/favorites">
        Favorites
      </NavLink>
      <NavLink className="nav-link" onClick={logOut} to="/login">
        Logout
      </NavLink>
    </div>
  );
}

LoggedInLinks.propTypes = {
  logOutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = () => ({
  logOutUser,
});

export default connect(
  null,
  mapDispatchToProps(),
)(LoggedInLinks);
