import { connect } from 'react-redux';
import { updatePin, destroyPin } from '../../actions/pin_actions';
import Account from './account';

const mapStateToProps = state => ({
  pins: state.entities.pins
});

const mapDispatchToProps = dispatch => ({
  updatePin: pin => dispatch(updatePin(pin)),
  destroyPin: id => dispatch(destroyPin(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);