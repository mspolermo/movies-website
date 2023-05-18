import { combineReducers } from "redux";
import gradeReducer from "./gradeReducer";
import bookmarkReducer from "./bookmarkReducer";
import authReducer from "./authReducer";


export const rootReducer = combineReducers({
	grade: gradeReducer,
	bookmark: bookmarkReducer,
	auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>