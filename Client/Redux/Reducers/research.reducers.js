import {combineReducers} from 'redux';
import {ADD_UNIT_GROW_BED. ADD_VEGET_GROW_BED, DEL_UNIT_GROW_BED, DEL_VEGET_GROW_BED,VISIBILITY_GROW_BED} from '../Actions/research.adction.js';


function unitGrowBedAct(state = [], action) {
    switch (action.type) {
        case ADD_UNIT_GROW_BED :
            return [
                ...state,
                action.payload
            ]
        case DEL_UNIT_GROW_BED : 
            var newState = Object.assign({}, state);
            newState.splice(action.unitIndex, 1);
            // Defer Process Index Element
            return newState;
        case ADD_VEGET_GROW_BED :
            var newState = Object.assign({}, state);
            var newState.units[action.unitIndex].beds[growBedIndex].vegets.push(action.payload);
            return newState;
        case DEL_VEGET_GROW_BED : 
            var newState = Object.assign({}, state);
            var vegets = newState.units[action.unitIndex].beds[growBedIndex].vegets;
            vegets.splice(action.vegetIndex, 1);
            // Defer Process Index Element
            return newState;
        case VISIBILITY_GROW_BED : 
            var newState = Object.assign({}, state);
            var growBed = newState.units[action.unitIndex].beds[growBedIndex];
            if(growBed.visibility) {
                growBed.visibility = false;
            }else{
                growBed.visibility = true;
            }
            return newState;
                
    }
}

 
const ResearchReducers = combineReducers({
    units : unitGrowBedAct
});
