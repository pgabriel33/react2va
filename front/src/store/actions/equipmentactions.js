// Fonte de informação da Store. Descreve o que aconteceu !

import equipmentService from "../../services/equipmentService";

export const EQUIPMENT_ACTIONS = {
    ADD: 'ADD_EQUIPMENT',
    DELETE: 'DELETE_EQUIPMENT',
    GET: 'GET_EQUIPMENT',
    LIST: 'LIST_EQUIPMENT',
    SELECT: 'SELECT_EQUIPMENT',
    UNSELECT: 'UNSELECT_EQUIPMENT'
}

export function listEquipment() {
    return function(dispatch){
        return equipmentService.findAll().then( response => {
            dispatch({
                type: EQUIPMENT_ACTIONS.LIST,
                payload: response.data
            });
        });
    }
}

export function saveEquipment(equipment) {
    return function(dispatch){
        return equipmentService.save().then( response => {
            dispatch({
                type: EQUIPMENT_ACTIONS.ADD,
                payload: response.data
            });
        });
    }
}
