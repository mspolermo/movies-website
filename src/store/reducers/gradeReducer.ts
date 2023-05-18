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
    }
}
})

export const {gradeTrue, gradeFalse} = gradeSlice.actions

export default gradeSlice.reducer