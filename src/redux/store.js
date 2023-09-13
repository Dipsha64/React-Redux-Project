import { createStore } from '@reduxjs/toolkit';
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from "redux-logger";

const store = createStore(reducers,composeWithDevTools());

export default store;