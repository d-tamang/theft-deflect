import React from 'react';
import './comment.css';
import { FaTrash } from 'react-icons/fa';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchPinComments(this.props.pin._id);
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pin._id !== this.props.pin._id) {
      this.props.fetchPinComments(nextProps.pin._id);
    }
  }

  deleteComment(e, id) {
    e.preventDefault();
    this.props.destroyComment(id);
  }

  showComments() {
    let comments = Object.values(this.props.comments);
    if (comments.length === 0) return <div>No Comments</div>;
    let pinComments = [];
    for (let comment of comments) {
      if (comment.pin === this.props.pin._id) {
        pinComments.push(comment);
      }
    }
    return pinComments.map((comment, i) => {
      return <div key={i + Math.random()}>
        <div>{comment.text}</div>
        <button onClick={(e) => this.deleteComment(e, comment._id)}><FaTrash /></button>
        {/* {this.props.currentUser && this.props.currentUser.id === comment.user ? <div>
          <button><img id="delete-comment" src="deleteicon.png"/></button>
        </div> : <div className="hidden-div"></div>} */}
      </div>
    })
  }

  render() {
    return (
      <div>
        {this.showComments()}
      </div>
    )
  }
}

export default CommentIndex;