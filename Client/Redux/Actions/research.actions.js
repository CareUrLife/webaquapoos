export const ADD_UNIT_GROW_BED = 'ADD_UNIT_GROW_BED';
export const ADD_VEGET_GROW_BED = 'ADD_VEGET_GROW_BED';
export const DEL_UNIT_GROW_BED = 'DEL_UNIT_GROW_BED';
export const DEL_VEGET_GROW_BED = 'DEL_VEGET_GROW_BED';
export const ADD_GROW_BED = 'ADD_GROW_BED';
export const DEL_GROW_BED = 'DEL_GROW_BED';
export const SET_IS_USER_AUTHENTICATED = 'SET_IS_USER_AUTHENTICATED';
export const FLUSH_OUT_STATE_DATA = 'FLUSH_OUT_STATE_DATA';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
    /*
     * Action Creators
     */

export function setInitialState(state) {
    return {
        type : SET_INITIAL_STATE,
        state
    }
}

export function addUnitGrowBed(unitName, temp, ph, nitrat) {
    return {
        type: ADD_UNIT_GROW_BED,
        payload : {
            name : unitName,
            beds : [
                
            ],
            numBed : 0,
            unitStatus : {
                ph,
                temp,
                nitrat
            },
            pos : {
                
            }
        }
    }
}

export function delUnitGrowBed(pos) {
    return {
        type : DEL_UNIT_GROW_BED,
        pos
    }
}

export function addGrowBed(pos, material) {
    return {
        type : ADD_GROW_BED,
        payload : {
            pos,
            material,
            vegets : [],
            status : {},
            numVeget : 0
        }
    }
}

export function delGrowBed(pos) {
    return {
        type : DEL_GROW_BED,
        pos
    }
}
                           

export function addVegetGrowBed(pos, text) {
    return {
        type : ADD_VEGET_GROW_BED,
        payload : {
            pos,
            name : text,
            status : {}
        }
    }
}

export function delVegetGrowBed(vegetIndex, pos) {
    return {
        type : DEL_VEGET_GROW_BED,
        pos
    }
} 

export function setIsUserAuthenticated(value) {
    return {
        type: SET_IS_USER_AUTHENTICATED,
        value
    }
}


export function setUserInfo(payload) {
    return {
        type : SET_USER_INFO,
        payload
    }
}

export function flushOutStateData() {
    return {
        type: FLUSH_OUT_STATE_DATA
    }
}

