import {connect} from 'react-redux';
import {delUnitGrowBed} from '../../Actions/research.actions.js';
import Garden from '../research.garden.js';


const mapStateToProps = (state) => {
    return {
        units : state.units,
        numUnit : state.numUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUnitBarClick: (pos) => {
            dispatch(delUnitGrowBed(pos));
        },
        onButtonAddClick : () => {
            dispatch(addUnitGrowBed);
        }
    }
}

const ContainerGarden = connect(
    mapStateToProps,
    mapDispatchToProps
)(Garden)

export default ContainerGarden;

