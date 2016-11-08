import {combineReducers} from 'redux';
import {ADD_UNIT_GROW_BED, ADD_VEGET_GROW_BED, DEL_UNIT_GROW_BED, DEL_VEGET_GROW_BED,VISIBILITY_GROW_BED} from '../Actions/research.actions.js';

const initialState = {
    units : [],
    numUnit : 0
}

function ResearchReducers(state, action) {
    if(typeof state === 'undefined') {
        state = initialState;
    }
    switch (action.type) {
        case ADD_UNIT_GROW_BED :
            var newPayload = Object.assign({}, action.payload, {pos : {unit : state.numUnit}});
            var newState = Object.assign({}, state, {units : [...state.units, action.payload]}, {numUnit : ++state.numUnit});
            return newState;
        case DEL_UNIT_GROW_BED : 
            var newState = Object.assign({}, state);
            newState.units.splice(action.pos.unit, 1);
            newState.numUnit = newState.units.size;
            var i;
            for(i = action.pos.unit + 1; i < newState.numUnit; i++) {
                newState.units[i].pos.unit--;
            }
            // Defer Process Index Element
            return newState;
        case ADD_VEGET_GROW_BED :
            var newState = Object.assign({}, state);
            var newPayload = Object.assign({}, action.payload);
            newPayload.pos.veget = state.units[action.pos.unit].beds[action.pos.bed].numVeget++;
            
            newState.units[action.pos.unit].beds[action.pos.bed].vegets.push(action.payload);
            
            return newState;
        case DEL_VEGET_GROW_BED : 
            var newState = Object.assign({}, state); 
            var vegets = newState.units[action.pos.unit].beds[action.pos.bed].vegets;
            newState.units[action.pos.unit].beds[action.pos.bed].numVeget--;
            vegets.splice(action.pos.veget, 1);
            
            var i;
            for (i = action.pos.bed + 1 ; i < newState.units[paction.pos.unit].beds[action.pos.bed].numVeget ; i++) {
                vegets[i].pos.veget--;
            }
            // Defer Process Index Element
            return newState;
        case VISIBILITY_GROW_BED : 
            var newState = Object.assign({}, state);
            var growBed = newState.units[action.pos.unit].beds[action.pos.bed];
            if(growBed.visibility) {
                growBed.visibility = false;
            }else{
                growBed.visibility = true;
            }
            return newState;
        default : 
            return state;
                
    }
}

 
export default ResearchReducers;
