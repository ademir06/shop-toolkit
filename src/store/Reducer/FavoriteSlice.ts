import {IFavorite} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

interface IFavoriteSlice {
    favorite: IFavorite[]
    loading: boolean
    error: string
}

const initialState: IFavoriteSlice = {
    favorite: [],
    loading: false,
    error: ''
}

export const FavoriteReducer = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        getToFavorite(state, action) {
            const foundProduct = state.favorite.find(el => el.id === action.payload.id)
            if (foundProduct) {
                state.favorite = state.favorite.filter(el => el.id !== action.payload.id)
            } else {
                state.favorite = [...state.favorite, {...action.payload}]
            }
        },
    }
})

export const {getToFavorite} = FavoriteReducer.actions
export default FavoriteReducer.reducer