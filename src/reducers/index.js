import {combineReducers} from "redux";
import gameReducer from './gamesReducer';
import DetailReducer from './detailReducer';


const rootReducer = combineReducers({
    games:gameReducer,
    detail:DetailReducer,
});

export default rootReducer;