import {connect} from 'react-redux';
import {delUnitGrowBed, addUnitGrowBed, addVegetGrowBed, delVegetGrowBed, visibilityGrowBed} from '../../Actions/research.actions.js';
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
        onBtnDelVegetClick : (pos) => {
            dispatch(delVegetGrowBed(pos));
        },
        onBtnAddVegetClick : (pos, value) => {
            dispatch(addVegetGrowBed(pos, value));
        }, 
        onButtonAddClick : (unitName, temp, ph, nitrat) => {
            dispatch(addUnitGrowBed(unitName, temp, ph, nitrat));
        },
        onCheckVisibilityClick : (pos) => {
            dispatch(visibilityGrowBed(pos));
        } 
    }
}

const ContainerGarden = connect(
    mapStateToProps,
    mapDispatchToProps
)(Garden)

export default ContainerGarden;

