import React from 'react';
import './account.css'

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  getDate(objectId) {
    let pinDate = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return pinDate.toString().slice(3, 15);
  }

  showUserPins() {
    let userPins = [];
    for (let pin of this.props.pins) {
      if (pin.user === this.props.currentUser.id ) {
        userPins.push(pin);
      }
    }
    if (userPins.length === 0) {
      return (
        <div>You have not made any reports.</div>
      )
    } else {
      return userPins.map((pin, i) => (
        <div key={i} className="report">
          <div>{this.getDate(pin._id)}</div>
          <div>{pin.category}</div>
          <div id="description">{pin.description}</div>
          <button className="account-btn" onClick={() => this.props.destroyPin(pin._id)}><img id="delete-icon"src="/images/deleteicon.png"/></button>
        </div>
      ))
    }
  }

  render() {
    if (!this.props.pins) return null;
    return (
      <div>
        <div id="account-header">{this.props.currentUser.username}: Your Reports</div>
        <div className="reports-grid">{this.showUserPins()}</div>
      </div>
    )
  }
}

export default Account;