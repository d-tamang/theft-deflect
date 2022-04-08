import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import { BiMessageAdd } from 'react-icons/bi';

class CommentShow extends React.Component {
    constructor(props) {
        super(props)
        this.showContainer = React.createRef();

        this.state = ({
            editMode: false,
            text: this.props.comment.text
        })

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClickOutsideForm = (event) => {
        if (this.showContainer.current && !this.showContainer.current.contains(event.target)) {
            this.setState({
                editMode: false,
            });
        }
    }

    deleteComment(e, id) {
        e.preventDefault();
        this.props.destroyComment(id);
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
        document.addEventListener("mousedown", this.handleClickOutsideForm);
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = this.props.comment
        let newComment = {
            _id: comment._id,
            text: this.state.text
        };
        this.props.updateComment(newComment)
        

        this.setState({
            editMode: false,
        })
    }
    
    render() {
        const comment = this.props.comment;

        return (
            <div ref={this.showContainer}>
                {this.state.editMode && (
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.text} onChange={this.update('text')}></textarea>
                        <button className="edit-comment-icon"><BiMessageAdd /></button>
                    </form>
                )}
                {!this.state.editMode && (
                    <div>
                        {comment.text}
                    </div>
                )}
                {this.props.currentUser && this.props.currentUser.id === comment.user ? <div>
                    <button className="fa-icon-box" onClick={() => this.editComment()}><FiEdit /></button>    
                    <button className="fa-icon-box" onClick={(e) => this.deleteComment(e, comment._id)}><FaTrashAlt /></button>
                    </div> : <div className="hidden-div">
                </div>}
            </div>
        )
    }
}

export default CommentShow;