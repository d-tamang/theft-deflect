import Map from './map';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        pins: Object.values(state.entities.pins)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // nothing for now
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);