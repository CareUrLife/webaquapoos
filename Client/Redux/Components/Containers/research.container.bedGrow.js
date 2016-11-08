import {connect} from 'react-redux';
import {visibilityGrowBed, addVegetGrowBed, delVegetGrowBed} from '../../Actions/research.actions.js';
import BedGrow from '../research.bedGrow.js';

const mapStateToProps = (state, props) => {
    console.log(state);
    var tmp = state.units[props.pos.unit].beds[props.pos.bed]; 
    return {
        vegets : tmp.vegets, 
        visibility : tmp.visibility, 
        numVeget : tmp.numVeget
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onVegetClick : (pos) => {
            dispatch(delVegetGrowBed(pos));
        },
        onBedBarClick : (pos) => {
            dispatch(visibilityGrowBed(pos));
        }
    }
} 

const ContainerBedGrow = connect(
    mapStateToProps,
    mapDispatchToProps
)(BedGrow) 


export default ContainerBedGrow;
