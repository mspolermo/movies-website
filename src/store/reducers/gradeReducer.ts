import {createSlice} from "@reduxjs/toolkit"

export const gradeSlice = createSlice({
name:'grade',
initialState: {
    value: false
},
reducers: {
    gradeTrue: state => {
        state.value = true
    },
    gradeFalse: state => {
        state.value = false
    },
    gradeTrueByAmount: (state, action) => {
        state.value = action.payload
    }
}
})

export const {gradeTrue, gradeFalse} = gradeSlice.actions

export default gradeSlice.reducer