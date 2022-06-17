import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './account.css'

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  getDate(objectId) {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000).toUTCString();
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
        <div id="no-reports">You have not made any reports.</div>
      )
    } else {
      return userPins.map((pin, i) => (
        <div key={i} className="report">
          <div id='report-date-container'>
            <div id='report-date-title'>Date:&nbsp;</div>
            <div id='report-date'>{this.getDate(pin._id)}</div>
          </div>
          <div id='report-category-container'>
            <div id='report-category-title'>Category:&nbsp;</div>
            <div>{pin.category}</div>
          </div>
          <div id="report-description-container">
            <div id='report-description-title'>Description:&nbsp;</div>
            <div id='report-description'>{pin.description}</div>
          </div>
          <div className="account-btn-container">  
            <button className="account-btn" onClick={() => this.props.destroyPin(pin._id)}><FaTrashAlt /></button>
          </div>
        </div>
      ))
    }
  }

  render() {
    if (!this.props.pins) return null;
    return (
      <div className='account-show'>
        <div id="account-header">Hi {this.props.currentUser.username}, Here Are Your Reports</div>
        <div className="reports-grid">{this.showUserPins()}</div>
      </div>
    )
  }
}

export default Account;