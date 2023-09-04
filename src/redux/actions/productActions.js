import { ActionTypes } from "../constants/action-type";

// SET PRODUCT ACTION USING ACTION TYPE
export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    }
};

// SELECTED PRODUCT ACTION USING ACTION TYPE
export const selectedProducts = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product,
    }
};

// REMOVE SELECTED PRODUCT ACTION USING ACTION TYPE
export const removeProduct = (product) => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload : product,
    }
}

