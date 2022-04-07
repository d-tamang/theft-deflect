import { connect } from 'react-redux';
import { fetchPins, updatePin, destroyPin } from '../../actions/pin_actions';
import Account from './account';

const mapStateToProps = state => ({
  currentUser: state.session.user,
  pins: Object.values(state.entities.pins)
});

const mapDispatchToProps = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  updatePin: pin => dispatch(updatePin(pin)),
  destroyPin: id => dispatch(destroyPin(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);