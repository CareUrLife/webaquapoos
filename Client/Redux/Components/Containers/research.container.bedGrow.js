import {connect} from 'react-redux';
import {visibilityGrowBed}, {addVegetGrowBed}, {delVegetGrowBed} from '../../Actions/research.actions.js';
import BedGrow from '../research.bedGrow.js';

const mapStateToProps = (state, props) => {
    return {
        vegets : state.units[props.pos.unit].beds[props.pos.bed].vegets,
        visibility : state.units[props.pos.unit].beds[props.pos.bed].visibility;
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onVegetClick : (pos) => {
            dispatch(delVegetGrowBed(pos.unit, pos.bed, pos.veget));
        },
        onBedBarClick : (pos) => {
            dispatch(visibilityGrowBed(pos.unit, pos.bed));
        }
    }
} 

const ContainerBedGrow = connect(
    mapStateToProps,
    mapDispatchToProps
)(BedGrow) 
