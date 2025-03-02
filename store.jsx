import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducersAndActions/reducers/index";

// This adds Redux DevTools support
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers()
);

export default store;