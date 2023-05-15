import {appDispatch} from "../../index";
import {IFavorite} from "../../../types";
import {getToFavorite} from "../FavoriteSlice";

export const addToFavorite = (el: IFavorite) => (dispatch: appDispatch) => {
    const fav: any = localStorage.getItem("favorite")
    let con = JSON.parse(fav) || []
    const fount = con.find((e: any) => e.id === el.id)
    if (fount) {
        con = con.filter((e: any) => el.id !== e.id)
    } else {
        con = [...con, {...el}]
    }
    dispatch(getToFavorite(el))
    localStorage.setItem("favorite", JSON.stringify(con))
}
