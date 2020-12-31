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
  }
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
  )
}
LoggedInLinks.propTypes = {
  logOutUser: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch =>{
  return{
    logOutUser: ()=>dispatch(logOutUser()),
  }
}
const mapStateToProps = state => ({
  login: state.loginUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(LoggedInLinks);

