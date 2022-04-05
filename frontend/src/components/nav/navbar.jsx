import React from 'react';
import { Link } from 'react-router-dom';

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
      return <div>
        <Link to="/">Home</Link>
        <Link to="/account">My Account</Link>
        <button onClick={(e) => this.logoutUser(e)}>LOGOUT</button>
      </div>
    } else {
      return <div>
        <button onClick={() => this.props.openModal('login')}>LOG IN</button>
        <button onClick={() => this.props.openModal('signup')}>SIGN UP</button>
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