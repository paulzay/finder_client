import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../redux/actions/userActions';

const LoggedInLinks = () =>{
  return(
  <div className="custom-nav-lo">
    <NavLink className="nav-link" to="/signup">
      bitch
    </NavLink>
    <NavLink className="nav-link" onClick={this.props.handleLogout} to="/logout">
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
  notifications: {},
};

const mapStateToProps = state => ({
  login: state.loginUser,
  error: state.LoginReducer.error,

});

const mapDispatchToProps = () => ({
  logoutUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(withRouter(LoggedInLinks));


