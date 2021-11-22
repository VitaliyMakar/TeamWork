import {createStore, appMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore (appMiddleware(thunk, logger))