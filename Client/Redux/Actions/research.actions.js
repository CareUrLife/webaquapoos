export const ADD_UNIT_GROW_BED = 'ADD_UNIT_GROW_BED';
export const ADD_VEGET_GROW_BED = 'ADD_VEGET_GROW_BED';
export const DEL_UNIT_GROW_BED = 'DEL_UNIT_GROW_BED';
export const DEL_VEGET_GROW_BED = 'DEL_VEGET_GROW_BED';
export const VISIBILITY_GROW_BED = 'VISIBILITY_GROW_BED';

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

