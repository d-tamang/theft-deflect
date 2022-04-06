import React from 'react';

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
      if (pin.user === this.props.currentUserId ) {
        userPins.push(pin);
      }
    }
    if (userPins.length === 0) {
      return (
        <div>You have not made any reports.</div>
      )
    } else {
      return userPins.map((pin, i) => (
        <div key={i} className="pin">
          <div>{pin.category}</div>
          <div>{pin.description}</div>
          <div>{this.getDate(pin._id)}</div>
        </div>
      ))
    }
  }

  render() {
    if (!this.props.pins) return null;
    return (
      <div>
        <div>Your Reports</div>
        {this.showUserPins()}
      </div>
    )
  }
}

export default Account;