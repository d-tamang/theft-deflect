import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  showLinks() {
    if (this.props.loggedIn) {
      return <div className='navbar'>
        <div className='logo'>Theft Deflect</div>
        <ul className='nav-links'>
          <li><button className='navbar-button'><Link to="/">MAP</Link></button></li>
          <li><button className='navbar-button'><Link to="/about">ABOUT</Link></button></li>
          <li><button className='navbar-button'><Link to="/account">MY ACCOUNT</Link></button></li>
          <li><button className='navbar-button' onClick={(e) => this.logoutUser(e)} >LOG OUT</button></li>
        </ul>
      </div>
    } else {
      return <div className='navbar'>
        <div className='logo'>TheftDeflect</div>
        <ul className='nav-links'>
          <li><button className='navbar-button'><Link to="/">MAP</Link></button></li>
          <li><button className='navbar-button'><Link to="/about">ABOUT</Link></button></li>
          <li><button className='navbar-button' onClick={() => this.props.openModal('login')}>LOG IN</button></li>
          <li><button className='navbar-button' onClick={() => this.props.openModal('signup')}>SIGN UP</button></li>
        </ul>
      </div>
    }
  }

  render() {
    return (
      <div>
        {this.showLinks()}
      </div>
    )
  }
}

export default NavBar;