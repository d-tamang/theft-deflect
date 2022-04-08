import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser ? this.props.currentUser.id : '',
      pin: this.props.pin._id,
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.loggedIn) return this.props.openModal('login');
    this.props.createComment(this.state);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea type="text" value={this.state.text} onChange={this.updateText} rows="5" cols="30"></textarea>
          </div>
          <div>
            <button className="add-comment" onClick={this.handleSubmit}>ADD COMMENT</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm;