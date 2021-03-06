import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    otherForm: (
      <button className="other-btn" onClick={() => dispatch(openModal('login'))}>
        LOG&nbsp;IN
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);