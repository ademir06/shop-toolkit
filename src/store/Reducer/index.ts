import {ILogin} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ILogInReducer {
    login: ILogin[]
    loading: boolean
    error: string
}

const initialState: ILogInReducer = {
    login: [],
    loading: false,
    error: ''
}

export const LoginReducerSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        getLogin(state) {
            state.loading = true
        },
        getLoginSuccess(state, action: PayloadAction<ILogin[]>) {
            state.loading = false;
            state.login = action.payload
            state.error = ''
        },
        getLoginError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.login = []
        }
    }
})

export const {getLogin,getLoginSuccess,getLoginError} = LoginReducerSlice.actions
export default LoginReducerSlice.reducer