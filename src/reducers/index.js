import recommendedLevel from "./dataReducer";
import dataProportions from "./propReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    recommendedLevel,
    dataProportions
});

export default rootReducer;