import {combineReducers, configureStore} from "@reduxjs/toolkit";
import LoginReducerSlice from "./Reducer";


const rootState = combineReducers({
    LoginReducerSlice
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootReducer = ReturnType<typeof rootState>
type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState['dispatch']