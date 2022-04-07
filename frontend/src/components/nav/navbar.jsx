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
      return <header className="nav-bar">
        <div className="left-nav">
          <div><button className='nav-btn'><Link className="nav-link" to="/">MAP</Link></button></div>
          <div><button className='nav-btn'><Link className="nav-link" to="/account">ACCOUNT</Link></button></div>
        </div>
        <div id="nav-logo"><Link className="nav-link" to="/">Theft Deflect</Link></div>
        <div className="right-nav">
          <div><button className='nav-btn'><Link className="nav-link" to="/about">ABOUT</Link></button></div>
          <div><button className='nav-btn' onClick={(e) => this.logoutUser(e)} >LOG OUT</button></div>
        </div>
      </header>
    } else {
      return <header className="nav-bar">
        <div className="left-nav">
          <div><button className='nav-btn'><Link className="nav-link" to="/">MAP</Link></button></div>
          <div><button className='nav-btn'><Link className="nav-link" to="/about">ABOUT</Link></button></div>
        </div>
        <div id="nav-logo"><Link className="nav-link" to="/">Theft Deflect</Link></div>
        <div className="right-nav">
          <div><button className='nav-btn' onClick={() => this.props.openModal('login')}>LOG IN</button></div>
          <div><button className='nav-btn' onClick={() => this.props.openModal('signup')}>SIGN UP</button></div>
        </div>
      </header>
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