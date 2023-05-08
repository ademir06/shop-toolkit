import {appDispatch} from "../../index";
import {IFavorite} from "../../../types";
import {getToFavorite} from "../FavoriteSlice";

export const addToFavorite = (el: IFavorite) => (dispatch: appDispatch) => {
    dispatch(getToFavorite(el))
}
