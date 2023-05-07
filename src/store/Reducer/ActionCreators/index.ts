import {appDispatch} from "../../index";
import {getValue} from "../index";


export const setValue = (e: any) => (dispatch: appDispatch) => {
    dispatch(getValue(e))
}

// export const formSliceCom = (newProduct: any) => async (dispatch: appDispatch) => {
//     try {
//         dispatch(getLogin())
//         dispatch(getLoginSuccess(await axios.post(``, newProduct)))
//     } catch (e) {
//         dispatch(getLoginError("Error..."))
//     }
// }