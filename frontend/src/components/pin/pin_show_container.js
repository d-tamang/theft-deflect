import { connect } from 'react-redux';
import { updatePin, destroyPin } from '../../actions/pin_actions';
import { createComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePin: pin => dispatch(updatePin(pin)),
    destroyPin: id => dispatch(destroyPin(id)),
    createComment: comment => dispatch(createComment(comment)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);