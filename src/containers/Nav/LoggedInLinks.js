import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOutUser } from '../../redux/actions/userActions';
import './loggedin.scss';

function LoggedInLinks(){
  const logOut = ()=>{
    localStorage.removeItem("token")
    logOutUser()
    alert("Successfully logged out!")
  }
  return (
    <div className="links">
      <NavLink className="" to="/cars">
        Cars
      </NavLink>
      <NavLink className="" to="/favorites">
        Favorites
      </NavLink>
      <NavLink className="" onClick={logOut} to="/">
        Logout
      </NavLink>
    </div>
  )
}
LoggedInLinks.propTypes = {
  logOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  login: state.loginUser,
});

const mapDispatchToProps = () => ({
  logOutUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(LoggedInLinks);

