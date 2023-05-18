import {createSlice} from "@reduxjs/toolkit"

export const treilersBlockSlice = createSlice({
name:'treilersBlock',
initialState: {
    treilersBlockStatus: false
},
reducers: {
    treilersBlockTrue: state => {
        state.treilersBlockStatus = true
    },
    treilersBlockFalse: state => {
        state.treilersBlockStatus = false
    }
}
})

export const {treilersBlockTrue, treilersBlockFalse} = treilersBlockSlice.actions

export default treilersBlockSlice.reducer