import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

class CommentShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            editMode: false,
            text: this.props.comment.text
        })
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    editComment() {
        this.setState({
            editMode: true
        })
    }
    render() {
        const comment = this.props.comment;

        return (
            <div>
                {this.state.editMode && (
                    <input value={this.state.text} onChange={this.update('description')}></input>
                )}
                {!this.state.editMode && (
                    <div>
                        {comment.text}
                    </div>
                )}
                {this.props.currentUser && this.props.currentUser.id === comment.user ? <div>
                    <button onClick={() => this.editComment()}><FiEdit /></button>    
                    <button onClick={(e) => this.deleteComment(e, comment._id)}><FaTrash /></button>
                    </div> : <div className="hidden-div">
                </div>}
            </div>
        )
    }
}

export default CommentShow;