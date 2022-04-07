import React from 'react';
import CommentForm from '../comments/comment_form';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  showDate() {
    let date = new Date(parseInt(this.props.pin._id.substring(0, 8), 16) * 1000);
    return date.toString().slice(3, 15);
  }

  closeShow(e) {
    e.preventDefault();
    document.getElementById('pin-show-id').style.height = "0";
  }

  deletePin(e, pinId) {
    e.preventDefault();
    this.props.destroyPin(pinId);
    document.getElementById("pin-show-id").style.height = "0";
  }

  editPin(e, pin) {
    e.preventDefault();
  }

  categoryImage(){
    if (this.props.pin.category === 'Break In') {
      return (
        <img src='/images/deleteicon.png' width='100' height='100'></img>
      )
    } else if (this.props.pin.category === 'Parts Theft') {
      return (
        <img src='/images/deleteicon.png' width='100' height='100'></img>
      )
    } else if (this.props.pin.category === 'Vandalism') {
      return (
        <img src='/images/deleteicon.png' width='100' height='100'></img>
      )
    } else {
      return (
        <img src='/images/deleteicon.png' width='100' height='100'></img>
      )
    }
  }

  render() {
    const pin = this.props.pin;
    return (
      <div>
        <button className="close-btn" onClick={this.closeShow}><img id="close-icon" src="images/arrow.png" /></button>
        <div>{this.showDate()}</div>
        <div>{pin.category}</div>
        <div>{this.categoryImage()}</div>
        <div>{pin.description}</div>
        {this.props.currentUser && this.props.currentUser.id === pin.user ? <div>
          <button onClick={(e) => this.editPin(e, pin)}>EDIT PIN</button>
          <button onClick={(e) => this.deletePin(e, pin._id)}>DELETE PIN</button>
        </div> : <div id="hidden-div"></div>}
        <div>Leave a Comment</div>
        <CommentForm
          currentUser={this.props.currentUser}
          pin={this.props.pin}
          openModal={this.props.openModal}
          createComment={this.props.createComment}
        />
      </div>
    )
  }
}

export default PinShow;