// We have to combin all the reducer in this main reducer file of index.js
import { combineReducers } from "redux";
import productReducer  from './productReducer.js'

const reducers = combineReducers({
    allProducts : productReducer,
})
export default reducers;