import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //  Placeholder: Redux rejects an empty combineReducers.
  //  Delete this line once `products` is registered here.
  app: (state = {}) => state,
});

export default rootReducer;