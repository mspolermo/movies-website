import {createSlice} from "@reduxjs/toolkit"

export const allCreatorsBlockSlice = createSlice({
name:'allCreatorsBlock',
initialState: {
    allCreatorsBlockStatus: false
},
reducers: {
    allCreatorsBlockTrue: state => {
        state.allCreatorsBlockStatus = true
    },
    allCreatorsBlockFalse: state => {
        state.allCreatorsBlockStatus = false
    }
}
})

export const {allCreatorsBlockTrue, allCreatorsBlockFalse} = allCreatorsBlockSlice.actions

export default allCreatorsBlockSlice.reducer