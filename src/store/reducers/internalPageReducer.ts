import {createSlice} from "@reduxjs/toolkit"

export const internalPageSlice = createSlice({
name:'internalPage',
initialState: {
    internalPageBlockStatus: false
},
reducers: {
    internalPageTrue: state => {
        state.internalPageBlockStatus = true
    },
    internalPageFalse: state => {
        state.internalPageBlockStatus = false
    }
}
})

export const {internalPageTrue, internalPageFalse} = internalPageSlice.actions

export default internalPageSlice.reducer