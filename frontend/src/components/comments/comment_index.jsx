import React from 'react';
import CommentShow from './comment_show';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      editForm: false
    })
  }

  componentDidMount() {
    this.props.fetchPinComments(this.props.pin._id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.pin._id !== this.props.pin._id) {
      this.props.fetchPinComments(nextProps.pin._id);
    }
  }
  

  showComments() {
    let comments = Object.values(this.props.comments);
    if (comments.length === 0) return <div className='no-comments-message'>Be the first to leave a comment.</div>;
    return comments.map((comment, i) => {
      return <div key={comment._id}>
        <CommentShow comment={comment} currentUser={this.props.currentUser} destroyComment={this.props.destroyComment} updateComment={this.props.updateComment}/>
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