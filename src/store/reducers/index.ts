import { combineReducers } from "redux";
import gradeReducer from "./gradeReducer";
import bookmarkReducer from "./bookmarkReducer";
import internalPageReducer from "./internalPageReducer";
import factsBlockReducer from "./factsBlockReducer";
import allCreatorsBlockReducer from "./allCreatorsBlockReducer";
import treilersBlockReducer from "./treilersBlockReducer";
import commentsCreatingBlockReducer from "./commentsCreatingBlockReducer";


export const rootReducer = combineReducers( {
    grade: gradeReducer,
    bookmark: bookmarkReducer,

    internalPage: internalPageReducer,
    factsBlock: factsBlockReducer,
    allCreatorsBlock: allCreatorsBlockReducer,
    treilersBlock: treilersBlockReducer,
    commentsCreatingBlock: commentsCreatingBlockReducer
    
})

export type RootState = ReturnType<typeof rootReducer>