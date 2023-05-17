import {createSlice} from "@reduxjs/toolkit"

export const commentsCreatingBlockSlice = createSlice({
name:'commentsCreatingBlock',
initialState: {
    commentsCreatingBlockStatus: false
},
reducers: {
    commentsCreatingBlockTrue: state => {
        state.commentsCreatingBlockStatus = true
    },
    commentsCreatingBlockFalse: state => {
        state.commentsCreatingBlockStatus = false
    }
}
})

export const {commentsCreatingBlockTrue, commentsCreatingBlockFalse} = commentsCreatingBlockSlice.actions

export default commentsCreatingBlockSlice.reducer