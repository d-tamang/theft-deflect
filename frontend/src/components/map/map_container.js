import Map from './map';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        pins: state.entities.pins,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPins: () => dispatch(fetchPins()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);