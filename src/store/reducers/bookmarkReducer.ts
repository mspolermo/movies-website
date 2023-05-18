import {createSlice} from "@reduxjs/toolkit"

export const bookmarkSlice = createSlice({
name:'bookmark',
initialState: {
    value: false
},
reducers: {
    bookmarkTrue: state => {
        state.value = true
    },
    bookmarkFalse: state => {
        state.value = false
    }
}
})

export const {bookmarkTrue, bookmarkFalse} = bookmarkSlice.actions

export default bookmarkSlice.reducer