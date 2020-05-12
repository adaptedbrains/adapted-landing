import { combineReducers } from 'redux';
import UtilsReducer from "./UtilsReducer";
import generalReducer from './generalReducer';

const rootReducer = combineReducers({
    generalData:generalReducer,
    utils: UtilsReducer,
});

export default rootReducer;
