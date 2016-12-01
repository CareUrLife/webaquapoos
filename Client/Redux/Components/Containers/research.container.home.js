import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {delUnitGrowBed, addUnitGrowBed, addVegetGrowBed, delVegetGrowBed, visibilityGrowBed, setIsUserAuthenticated, setUserInfo, flushOutStateData} from '../../Actions/research.actions.js';
import ResearchHome from '../research.home.js';


const mapStateToProps = (state) => {
    return {
        units : state.units,
        numUnit : state.numUnit,
        user : state.user
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
        },
        flushOutStateData : () => {
            dispatch(flushOutStateData());
        },
        setUserInfo : (userinfo) => {
            dispatch(setUserInfo(userinfo));
        },
        setIsUserAuthenticated : (value) => {
            dispatch(setIsUserAuthenticated(value));
        },
        redirect: (address) => {
            dispatch(push(address));
        }
    }
}

const ContainerResearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResearchHome);

export default ContainerResearch;

