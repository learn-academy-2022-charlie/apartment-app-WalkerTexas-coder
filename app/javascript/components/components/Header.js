import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import CozyLogo from '../assets/cozy-logo.png'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <header>
        <h1>Hello Charlie</h1>
        <Nav className='header-links'>
          <img src={CozyLogo} alt="Image of reclining alligator: click to go home" id='cozy_drivergator'/>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
          <NavItem>
            <NavLink to='/apartmentindex'> See all the apartments </NavLink>
          </NavItem>
          
          <NavItem>
           <NavLink to='/apartmentnew'> Add an apartment </NavLink>
          </NavItem>

        </Nav>
      </header>
    )
  }
}
export default Header