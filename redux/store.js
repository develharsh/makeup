import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/userReducers";
import { clientReducer } from "./reducers/clientReducers";
import { designReducer } from "./reducers/designReducers";
import { adminReducer } from "./reducers/adminReducers";
const reducer = combineReducers({
  design: designReducer,
  auth: authReducer,
  client: clientReducer,
  admin: adminReducer,
});
let initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
