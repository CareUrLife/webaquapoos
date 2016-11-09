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
            // Khoi tao 4 Bed trong Units, dong bo thong so status
            // voi Unit
            var i;
            for(i = 1 ; i <= 4 ; i++) {
                var newBed = {
                    name : "Grow Bed " + i,
                    vegets : [],
                    status : {
                        ph : newPayload.unitStatus.ph,
                        temp : newPayload.unitStatus.temp,
                        nitrat : newPayload.unitStatus.nitrat
                    },
                    pos : {
                        unit : newPayload.pos.unit,
                        bed : (i-1)
                    }  
                }
                newPayload.beds.push(newBed);
            }
            var newState = Object.assign({}, state, {units : [...state.units, newPayload]}, {numUnit : ++state.numUnit});
            console.log(newState); 
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
            newPayload.pos.veget = state.units[newPayload.pos.unit].beds[newPayload.pos.bed].numVeget++;
            
            newState.units[newPayload.pos.unit].beds[newPayload.pos.bed].vegets.push(newPayload);
            
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
