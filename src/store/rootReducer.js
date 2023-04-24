import reducers from "@/redux/reducers";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  weatherForecast: reducers,
});

export default rootReducer;
