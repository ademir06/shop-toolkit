import {combineReducers, configureStore} from "@reduxjs/toolkit";


const rootState = combineReducers({

})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootReducer = ReturnType<typeof rootState>
type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState['dispatch']