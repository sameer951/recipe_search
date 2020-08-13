import recipelistreducer from '../home/recipelistreducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    home: recipelistreducer
});

export default rootReducer;