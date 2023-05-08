import {combineReducers, configureStore} from "@reduxjs/toolkit";
import LoginReducerSlice from "./Reducer";
import CardReducerSlice from "./Reducer/Card";
import FavoriteReducer from "./Reducer/FavoriteSlice"
import BasketReducer from "./Reducer/BasketSlice";


const rootState = combineReducers({
    LoginReducerSlice,
    CardReducerSlice,
    FavoriteReducer
    BasketReducer,
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootReducer = ReturnType<typeof rootState>
type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState['dispatch']