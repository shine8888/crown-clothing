import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middleWares = [logger, thunk];

if (process.env.NODE_ENV === "development") {
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default store;
