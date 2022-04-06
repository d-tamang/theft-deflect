import Map from './map';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        pins: Object.values(state.entities.pins),
        loggedIn: state.session.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPins: () => dispatch(fetchPins()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);