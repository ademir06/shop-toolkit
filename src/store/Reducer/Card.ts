import {ICard} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICardSlice {
    card: ICard[]
    loading: boolean
    error: string
}

const initialState: ICardSlice = {
    card: [],
    loading: false,
    error: ''
}

export const CardReducerSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        getCard(state) {
            state.loading = true
        },
        getCardSuccess(state, action: PayloadAction<ICard[]>) {
            state.loading = false
            state.card = action.payload
            state.error = ''
        },
        getCardError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.card = []
            state.loading = false
        }
    }
})

export const {getCard, getCardSuccess, getCardError} = CardReducerSlice.actions
export default CardReducerSlice.reducer
