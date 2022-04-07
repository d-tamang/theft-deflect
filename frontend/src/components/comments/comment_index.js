import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPinComments(this.props.pin._id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pin._id !== this.props.pin._id) {
      this.props.fetchPinComments(nextProps.pin._id);
    }
  }

  showComments() {
    let comments = Object.values(this.props.comments);
    if (comments.length === 0) return <div>No Comments</div>;
    return (
      <div>
        {comments.map((comment, i) => (
          <div key={i}>{comment.text}</div>
        ))}
      </div>
    )
  }

  render() {
    // if (!this.props.comments) return null;
    return (
      <div>
        {this.showComments()}
      </div>
    )
  }
}

export default CommentIndex;