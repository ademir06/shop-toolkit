import {appDispatch} from "../../index";
import {addToBasket, decBasket, deletesBasket, TBasket} from "../BasketSlice";


export const addToBasketsREC = (el: TBasket) => (dispatch: appDispatch) => {
    dispatch(addToBasket(el))
}
export const decBasketsREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(decBasket(el))
}

export const deleteBasketsREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(deletesBasket(el))
}
