import {createSlice} from "@reduxjs/toolkit"

export const factsBlockSlice = createSlice({
name:'factsBlock',
initialState: {
    factsBlockStatus: false
},
reducers: {
    factsBlockTrue: state => {
        state.factsBlockStatus = true
    },
    factsBlockFalse: state => {
        state.factsBlockStatus = false
    }
}
})

export const {factsBlockTrue, factsBlockFalse} = factsBlockSlice.actions

export default factsBlockSlice.reducer