import { combineReducers } from "redux";
import gradeReducer from "./gradeReducer";
import bookmarkReducer from "./bookmarkReducer";
import internalPageReducer from "./internalPageReducer";
import factsBlockReducer from "./factsBlockReducer";
import allCreatorsBlockReducer from "./allCreatorsBlockReducer";
import treilersBlockReducer from "./treilersBlockReducer";
import commentsCreatingBlockReducer from "./commentsCreatingBlockReducer";
import bigPlayerReducer from "./bigPlayerReducer";
import sharePanelReducer from "./sharePanelReducer";


export const rootReducer = combineReducers( {
    grade: gradeReducer,
    bookmark: bookmarkReducer,

    internalPage: internalPageReducer,
    factsBlock: factsBlockReducer,
    allCreatorsBlock: allCreatorsBlockReducer,
    treilersBlock: treilersBlockReducer,
    commentsCreatingBlock: commentsCreatingBlockReducer,
    bigPlayer: bigPlayerReducer,
    sharePanel: sharePanelReducer
    
})

export type RootState = ReturnType<typeof rootReducer>