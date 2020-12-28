import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/actions/userActions';
import './loggedin.scss';

function LoggedInLinks({ logoutUser: userLogout }){
  const handleLogout = () => {
    localStorage.clear();
    userLogout();
  };

  return (
    <div className="links">
      <NavLink className="" to="/signup">
        Profile
      </NavLink>
      <NavLink className="" onClick={handleLogout} to="/">
        Logout
      </NavLink>
    </div>
  )
}
LoggedInLinks.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape({}),
};

LoggedInLinks.defaultProps = {
  history: {},
};

const mapStateToProps = state => ({
  login: state.loginUser,
  error: state.login.error,

});

const mapDispatchToProps = () => ({
  logoutUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(withRouter(LoggedInLinks));


