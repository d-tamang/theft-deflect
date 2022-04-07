import { connect } from 'react-redux';
import { updatePin, destroyPin } from '../../actions/pin_actions';
import { fetchPinComments, createComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated,
    comments: state.entities.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePin: pin => dispatch(updatePin(pin)),
    destroyPin: id => dispatch(destroyPin(id)),
    fetchPinComments: id => dispatch(fetchPinComments(id)),
    createComment: comment => dispatch(createComment(comment)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);