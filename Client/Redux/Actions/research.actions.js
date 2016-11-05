export const ADD_UNIT_GROW_BED = 'ADD_UNIT_GROW_BED';
export const ADD_VEGET_GROW_BED = 'ADD_VEGET_GROW_BED';
export const DEL_UNIT_GROW_BED = 'DEL_UNIT_GROW_BED';
export const DEL_VEGET_GROW_BED = 'DEL_VEGET_GROW_BED';
export const VISIBILITY_GROW_BED = 'VISIBILITY_GROW_BED';

    /*
     * Action Creators
     */

export function addUnitGrowBed(pH, temp, nitrat) {
    return {
        type: ADD_UNIT_GROW_BED,
        payload : {
            growBeds : [],
            unitStatus : {
                pH,
                temp,
                nitrat
            }
        }
    }
}

export function delUnitGrowBed(unitIndex) {
    return {
        type : DEL_UNIT_GROW_BED,
        unitIndex 
    }
}

export function addVegetGrowBed(text, unitIndex, growBedIndex) {
    return {
        type : ADD_VEGET_GROW_BED,
        unitIndex,
        growBedIndex,
        payload {
            vegetIndex :, 
            nameVeget : text
        }
    }
}

export function delVegetGrowBed(vegetIndex, unitIndex, growBedIndex, vegetIndex) {
    return {
        type : DEL_VEGET_GROW_BED,
        vegetIndex,
        growBedIndex,
        unitIndex
    }
} 

export function visibilityGrowBed(growBedIndex, unitIndex) {
    return {
        type : VISIBILITY_GROW_BED,
        growBedIndex,
        unitIndex
    }
}

