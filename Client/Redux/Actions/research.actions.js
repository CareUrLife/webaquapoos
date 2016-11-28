export const ADD_UNIT_GROW_BED = 'ADD_UNIT_GROW_BED';
export const ADD_VEGET_GROW_BED = 'ADD_VEGET_GROW_BED';
export const DEL_UNIT_GROW_BED = 'DEL_UNIT_GROW_BED';
export const DEL_VEGET_GROW_BED = 'DEL_VEGET_GROW_BED';
export const VISIBILITY_GROW_BED = 'VISIBILITY_GROW_BED';
export const SET_IS_USER_AUTHENTICATED = 'SET_IS_USER_AUTHENTICATED';
export const FLUSH_OUT_STATE_DATA = 'FLUSH_OUT_STATE_DATA';
export const SET_USER_INFO = 'SET_USER_INFO';
    /*
     * Action Creators
     */

export function addUnitGrowBed(unitName, temp, ph, nitrat) {
    return {
        type: ADD_UNIT_GROW_BED,
        payload : {
            name : unitName,
            beds : [
                
            ],
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

export function addVegetGrowBed(pos, text) {
    return {
        type : ADD_VEGET_GROW_BED,
        payload : {
            pos,
            name : text
        }
    }
}

export function delVegetGrowBed(vegetIndex, pos) {
    return {
        type : DEL_VEGET_GROW_BED,
        pos
    }
} 

export function visibilityGrowBed(pos) {
    return {
        type : VISIBILITY_GROW_BED,
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

