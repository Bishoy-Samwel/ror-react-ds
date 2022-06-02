import React from "react";
import { connect, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from './Logout';
import { authState } from '../selectors';

const Navbar = () => {
  const { loggedIn, authChecked, currentUser } = useSelector(authState);
  renderAuthLinks = () => {
    if (authChecked && loggedIn) {
      return (
        <>
          <NavLink
            exact
            to='/protected_route'>
            ProtectedRoute
          </NavLink>
          <NavLink
            exact
            to='/referral'>
            Referral
          </NavLink>
          {currentUser.email}
          <Logout />
        </>
      )
    } else if (!authChecked || !loggedIn) {
      return (
        <>
          <NavLink
            exact
            to='/signup'
          >
            Sign Up
          </NavLink>
          <NavLink
            exact
            to='/login'
          >
            Log In
          </NavLink>
        </>
      )
    }
  }

  return (
    <nav>
      <div>
        <div>
          <NavLink
            exact
            to='/'>
            NormalRoute
          </NavLink>
        </div>
        {renderAuthLinks()}
      </div>
    </nav>
  );
};

export default Navbar;