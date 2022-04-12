import React from 'react';
import CommentForm from '../comments/comment_form';
import CommentIndex from '../comments/comment_index';
import { FiEdit } from 'react-icons/fi';
import { FaTrashAlt, FaAngleDoubleUp } from 'react-icons/fa';
import { BiMessageAdd } from 'react-icons/bi';
import './pin.css';

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

  componentDidMount() {
    this.props.fetchPin(this.props.pin._id);
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
      // category: this.state.category,
      // description: this.state.description
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
        <div className="pic-box"><img className="show-pic" src='/images/break_in.jpeg'></img></div>
      )
    } else if (this.props.pin.category === 'Parts Theft') {
      return (
        <div className="pic-box"><img className="show-pic" src='/images/parts_theft.jpeg'></img></div>
      )
    } else if (this.props.pin.category === 'Vandalism') {
      return (
        <div className="pic-box"><img className="show-pic" src='/images/vandalism.jpg'></img></div>
      )
    } else {
      return (
        <div className="pic-box"><img className="show-pic" src='/images/stolen_vehicle.jpeg'></img></div>
      )
    }
  }

  render() {
    const pin = this.props.pin;
    
    return (
      <div className="pin-show-container" ref={this.showContainer}>
        <button className="close-btn" onClick={this.closeShow}><FaAngleDoubleUp /></button>
        <div id="pin-show-header">INCIDENT DETAILS</div>
        {this.categoryImage()}
        <div id="show-date">{this.showDate()}</div>

        {this.state.editMode && (
          <form className="edit-pin-form" onSubmit={this.handleSubmit}>
            <div className="edit-pin-category">Category</div>
            <select onChange={this.changeCategory} category={this.state.category} value={this.state.category} className='formDrop'>
              <option value={'Break In'} >Break In</option>
              <option value={'Vandalism'} >Vandalism</option>
              <option value={'Parts Theft'} >Parts Theft</option>
              <option value={'Stolen Vehicle'} >Stolen Vehicle</option>
            </select> <br />
            <div className="edit-pin-category">Description</div>
            <textarea type="text" value={this.state.description} onChange={this.update('description')} rows="8" cols="35"/>
            <button className="edit-comment-icon"><BiMessageAdd /></button>
          </form>
        )}

        {!this.state.editMode && (
          <div>
            <div><span className="show-category">Category:</span> {pin.category}</div>
            <div className="show-category">Description</div>
            <div id="pin-description">{pin.description}</div>
          </div>
        )}
        {this.props.currentUser && this.props.currentUser.id === pin.user ? <div>
          {!this.state.editMode && (
            <button className="fa-icon-box" onClick={(e) => this.editPin(e, pin)}><FiEdit /></button>
          )}
          <button className="fa-icon-box" onClick={(e) => this.deletePin(e, pin._id)}><FaTrashAlt /></button>
        </div> : <div className="hidden-div"></div>}
        <div id="discussion">DISCUSSION</div>
        <CommentIndex
          currentUser={this.props.currentUser}
          pin={this.props.pin}
          comments={this.props.comments}
          fetchPinComments={this.props.fetchPinComments}
          destroyComment={this.props.destroyComment}
          updateComment={this.props.updateComment}
        />
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