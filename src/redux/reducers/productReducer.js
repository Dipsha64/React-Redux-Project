//we r going to create reducer in this file. So reducer always take initial state in the Action.
// Its always take 2 parameters is state & action.

import { ActionTypes } from '../constants/action-type'
// Its define initial state in action.Used as a object.
const initialState = {
    products : [{
        id : 1,
        title : "Mango",
        category : "fruit"
    }]
}

// FOR multiple prodction action we need to added switch case to perform which action is call.
const productReducer = (state = initialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
export default productReducer;