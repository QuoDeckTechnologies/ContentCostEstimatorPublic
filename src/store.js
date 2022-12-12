import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers/index";
const store = configureStore({
    reducer: {
        root: rootReducer
    }
})
export default store;

/* for getting state from store
    - import {useDispatch, useSelector}  from "react-redux"
*/
// const myState = useSelector((state)=>{state.stateName})

/* for dispatching the action*/
// const dispatch = useDisptach()

/* 
use this dispatch variable on click of a button
<button onClick=()=>{dispatch().actionName}/>
*/