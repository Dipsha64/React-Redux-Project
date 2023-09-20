//we r going to create reducer in this file. So reducer always take initial state in the Action.
// Its always take 2 parameters is state & action.

import { ActionTypes } from '../constants/action-type'
// Its define initial state in action.Used as a object.
const initialState = {
    products : []
}

// FOR multiple production action we need to added switch case to perform which action is call.
export const productReducer = (state = initialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload};
        default:
            return state;
    }
};

export const selectedProductReducer = (state={}, {type,payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        default:
            return state;
    }
};