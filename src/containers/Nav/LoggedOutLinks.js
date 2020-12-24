import React from 'react'
import { NavLink } from 'react-router-dom';

export default function LoggedOutLinks() {
    return (
  <div className="custom-nav-lo">
    <NavLink className="nav-link" to="/signup">
      SignUp
    </NavLink>
    <NavLink className="nav-link" to="/login">
      Login
    </NavLink>
  </div>
    )
}
