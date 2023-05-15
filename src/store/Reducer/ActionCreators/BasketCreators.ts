import {appDispatch} from "../../index";
import {addToBasket, basketOnes, decBasket, deletesBasket, TBasket} from "../BasketSlice";


export const addToBasketsREC = (el: TBasket) => (dispatch: appDispatch) => {
    const baskets: any  = localStorage.getItem("basket")
    let block = JSON.parse(baskets) || []
    const fount = block.find((e: any) => e.id === el.id)
    if (fount) {
        block = block.map((e: any) => e.id === fount.id ? {...e, quantity: e.quantity +1} : e)
    } else {
        block = [...block, {...el, quantity: 1}]
    }
    dispatch(addToBasket(el))
    localStorage.setItem("basket", JSON.stringify(block))
}
export const decBasketsREC = (el: any) => (dispatch: appDispatch) => {
    const baskets: any  = localStorage.getItem("basket")
    let task = JSON.parse(baskets) || []
    task = task.map((e: any) => {
        if (e.id === el.id) {
            if (e.quantity > 1) {
                return  {...e, quantity: e.quantity -1}
            } else return e
        } else return e
    })
    dispatch(decBasket(el))
    localStorage.setItem("basket", JSON.stringify(task))
}

export const deleteBasketsREC = (el: any) => (dispatch: appDispatch) => {
    const baskets: any  = localStorage.getItem("basket")
    let task = JSON.parse(baskets) || []
    task = task.filter((e: any) => e.id !== el.id)
    dispatch(deletesBasket(el))
    localStorage.setItem("basket", JSON.stringify(task))
}

export const basketDetail = (el: any) => (dispatch: appDispatch) => {
    const basketsOne: any  = localStorage.getItem("basketOne")
    let man = JSON.parse(basketsOne) || {}
    man = el
    dispatch(basketOnes(el))
    localStorage.setItem("basketOne", JSON.stringify(man))
}
