import { combineReducers } from "redux";
import gradeReducer from "./gradeReducer";
import bookmarkReducer from "./bookmarkReducer";


export const rootReducer = combineReducers( {
    grade: gradeReducer,
    bookmark: bookmarkReducer
})

export type RootState = ReturnType<typeof rootReducer>