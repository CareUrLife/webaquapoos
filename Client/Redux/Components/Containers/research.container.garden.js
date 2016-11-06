import {connect} from 'react-redux';
import {delUnitGrowBed} from '../../Actions/research.actions.js';
import Garden from '../research.garden.js';


const mapStateToProps = (state) => {
    return {
        units : state.units
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUnitBarClick: (id) => {
            dispatch(delUnitGrowBed(id));
        }
    }
}

const ContainerGarden = connect(
    mapStateToProps,
    mapDispatchToProps
)(Garden)

