import {appDispatch} from "../../index";
import {getLogin, getLoginError, getLoginSuccess, getMode, getValue} from "../index";
import {CHAT_ID, TOKEN} from "../../../components/LiB";
import axios from "axios";
import {getCard, getCardError, getCardSuccess} from "../Card";


export const setCard = () => {
    return async (dispatch: appDispatch) => {
        try {
            dispatch(getCard())
            const url = await axios.get(`https://fakestoreapi.com/products`)
            const {data} = await url
            dispatch(getCardSuccess(data))
        } catch (e: any) {
            dispatch(getCardError(e.message))
        }
    }
}

export const setValue = (e: any) => (dispatch: appDispatch) => {
    dispatch(getValue(e))
}

export const formSliceCom = (message: any) => async (dispatch: appDispatch) => {
    try {
        dispatch(getLogin())
        dispatch(getLoginSuccess(
            await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                parse_mode: "html",
                text: message
            })
        ))
    } catch (e) {
        dispatch(getLoginError("Error..."))
    }
}


export const fetchMode = (mode: any) => (dispatch: appDispatch) => {
    dispatch(getMode(mode))
}

