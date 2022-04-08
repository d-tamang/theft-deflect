import { connect } from 'react-redux';
import { fetchPin, updatePin, destroyPin } from '../../actions/pin_actions';
import { fetchPinComments, createComment, destroyComment, updateComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated,
    comments: state.entities.comments,
    pins: state.entities.pins
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPin: id => dispatch(fetchPin(id)),
    updatePin: pin => dispatch(updatePin(pin)),
    destroyPin: id => dispatch(destroyPin(id)),
    fetchPinComments: id => dispatch(fetchPinComments(id)),
    createComment: comment => dispatch(createComment(comment)),
    destroyComment: id => dispatch(destroyComment(id)),
    openModal: modal => dispatch(openModal(modal)),
    updateComment: comment => dispatch(updateComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);