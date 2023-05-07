import {ILogin} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ILogInReducer {
    login: ILogin[]
    loading: boolean
    error: string
    value: Partial<any>
}

const initialState: ILogInReducer = {
    login: [],
    loading: false,
    error: '',
    value: {
        email: "",
        password: "",
    }
}

export const LoginReducerSlice = createSlice({
    name: 'LOGIN',
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
        },
        getValue(state,action: PayloadAction<Partial<any>>) {
            state.value = action.payload
        }
    }
})

export const {getLogin,getLoginSuccess,getLoginError, getValue} = LoginReducerSlice.actions
export default LoginReducerSlice.reducer