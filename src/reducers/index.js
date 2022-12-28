import recommendedLevel from "./dataReducer";
import dataProportions from "./propReducers";
import customData from "./customReducer";
import pdf from "./pdfReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    recommendedLevel,
    dataProportions,
    customData,
    pdf
});

export default rootReducer;