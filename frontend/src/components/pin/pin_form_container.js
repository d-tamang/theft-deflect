import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinForm from './pin_form';

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPin: (data) => dispatch(createPin(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinForm);