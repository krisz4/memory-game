import { combineReducers } from "redux";

import navReducer from "./navReducer";
import gameReducer from "./gameReducer";

const allReducers = combineReducers({
  nav: navReducer,
  game: gameReducer,
});

export default allReducers;
