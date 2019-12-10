// Especifica como o estado da aplicação irá mudar em resposta a uma action.
/*

NAMED IMPORT
A.js
export const A = 50
export const C = 50

B.js
import {A} from './A'

DEFAULT IMPORT
A.js
export default  50

B.js
import A from './A'

*/

import keyBy from "lodash/keyBy";
import {EQUIPMENT_ACTIONS} from '../actions/equipmentActions';

const initialState = {
    equipments: {},
    equipment: null
};

export default function equipmentReducer(state = initialState, action) {

    switch(action.type){

        case EQUIPMENT_ACTIONS.LIST:
            return {
                ...state,
                //equipments: keyBy(action.payload, 'id')
                equipments: action.payload
            };

        default:
            return state;

    }
}


/* switch(action.type){

    case EQUIPMENT_ACTIONS.ADD:
        return {
            ...state, // spread operator -> permite que objeto iterável seja expandido Ex. https://cursos.alura.com.br/forum/topico-pra-que-serve-os-3-pontos-45909
            equipments: {
                ...state.equipments,
                [action.payload.id]: action.payload
            }
        }

    case EQUIPMENT_ACTIONS.DELETE:
        return {
            ...state,
            equipments: omitBy(state.equipments, (e) => e.id === action.payload)
        };

    case EQUIPMENT_ACTIONS.GET:
        return {
            ...state,
            equipment: action.payload
        };

    case EQUIPMENT_ACTIONS.LIST:
        console.log(" REDUCER " + EQUIPMENT_ACTIONS.LIST);
        return action.payload;

    case EQUIPMENT_ACTIONS.SELECT:
        return {
            ...state,
            equipment: state.equipments[action.payload]
        };

    case EQUIPMENT_ACTIONS.UNSELECT:
        return {
            ...state,
            equipment: null
        };

    default:
        return state;
}

}*/
