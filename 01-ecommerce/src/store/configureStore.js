import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

//  Use the Redux DevTools composer when the extension is present, else plain compose.
const composeEnhancers =
  (import.meta.env.DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

//  Must run AFTER the store exists — the middleware needs a dispatch to bind to.
sagaMiddleware.run(rootSaga);

export default store;