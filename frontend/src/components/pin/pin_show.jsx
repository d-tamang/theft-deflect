import React from 'react';
import CommentForm from '../comments/comment_form';
import CommentIndex from '../comments/comment_index';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.showContainer = React.createRef();

    this.state = {
      editMode: false,
      lat: this.props.pin.lat,
      long: this.props.pin.long,
      category: this.props.pin.category,
      description: this.props.pin.description,
    }
    this.changeCategory = this.changeCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeShow = this.closeShow.bind(this);

  }

  showDate() {
    let date = new Date(parseInt(this.props.pin._id.substring(0, 8), 16) * 1000);
    return date.toString().slice(3, 15);
  }

  closeShow(e) {
    e.preventDefault();
    document.getElementById('pin-show-id').style.height = "0";
    this.setState({ editMode: false })
  }

  // update, changeCategory, and handleSubmit are for the edit function

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  changeCategory(e) {
    this.setState({ category: e.target.value })
  }

  handleClickOutsideForm = (event) => {
    if (this.showContainer.current && !this.showContainer.current.contains(event.target)) {
        this.setState({
            editMode: false,
        });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let pin = {
      _id: this.props.pin._id,
      lat: this.state.lat,
      long: this.state.long,
      category: this.state.category,
      description: this.state.description
    };

    this.props.updatePin(pin).then(
      () => {
        this.setState({ errors: this.props.errors })
      }
    )
    this.setState({
      editMode: false,
      category: '',
      description: '',
    });
  }

  deletePin(e, pinId) {
    e.preventDefault();
    this.props.destroyPin(pinId);
    document.getElementById("pin-show-id").style.height = "0";
  }

  editPin(e, pin) {
    e.preventDefault();
    this.setState({ editMode: true })
    document.addEventListener("mousedown", this.handleClickOutsideForm);
  }

  categoryImage() {
    if (this.props.pin.category === 'Break In') {
      return (
        <img src='/images/break_in.jpeg' width='300' height='200'></img>
      )
    } else if (this.props.pin.category === 'Parts Theft') {
      return (
        <img src='/images/parts_theft.jpeg' width='300' height='200'></img>
      )
    } else if (this.props.pin.category === 'Vandalism') {
      return (
        <img src='/images/vandalism.jpg' width='300' height='200'></img>
      )
    } else {
      return (
        <img src='/images/stolen_vehicle.jpeg' width='300' height='200'></img>
      )
    }
  }

  render() {
    const pin = this.props.pin;
    
    return (
      <div ref={this.showContainer}>
        <button className="close-btn" onClick={this.closeShow}><img id="close-icon" src="images/arrow.png" /></button>
        {this.categoryImage()}
        <div>{this.showDate()}</div>

        {this.state.editMode && (
          <form onSubmit={this.handleSubmit}>
            <label>Category</label> <br />
            <select onChange={this.changeCategory} category={this.state.category} value={this.state.category}>
              <option value={'Break In'} >Break In</option>
              <option value={'Vandalism'} >Vandalism</option>
              <option value={'Parts Theft'} >Parts Theft</option>
              <option value={'Stolen Vehicle'} >Stolen Vehicle</option>
            </select> <br />
            <label>Description</label> <br />
            <textarea type="text" value={this.state.description} onChange={this.update('description')} rows='6' />
            <button className="form-submit">SUBMIT CHANGES</button>
          </form>
        )}

        {!this.state.editMode && (
          <div>
            <div>{pin.category}</div>
            <div>{pin.description}</div>
          </div>
        )}
        {this.props.currentUser && this.props.currentUser.id === pin.user ? <div>
          {!this.state.editMode && (
            <button onClick={(e) => this.editPin(e, pin)}>EDIT PIN</button>
          )}
          <button onClick={(e) => this.deletePin(e, pin._id)}>DELETE PIN</button>
        </div> : <div className="hidden-div"></div>}
        <CommentIndex
          currentUser={this.props.currentUser}
          pin={this.props.pin}
          comments={this.props.comments}
          fetchPinComments={this.props.fetchPinComments}
          destroyComment={this.props.destroyComment}
        />
        <div>Leave a Comment</div>
        <CommentForm
          currentUser={this.props.currentUser}
          loggedIn={this.props.loggedIn}
          pin={this.props.pin}
          openModal={this.props.openModal}
          createComment={this.props.createComment}
        />
      </div>
    )
  }
}

export default PinShow;