import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: { root: persistedReducer },
    middleware: [thunk]
})
export const persistor = persistStore(store);

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