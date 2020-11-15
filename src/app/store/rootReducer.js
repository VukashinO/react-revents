import {combineReducers} from 'redux';
import { eventReducer } from '../../features/events/eventReducer';
import testReducer from '../../features/sandox/testReducer';
import asyncReducer from '../async/asyncReducer';

 const rootReducer = combineReducers({
     test: testReducer,
     event: eventReducer,
     async: asyncReducer
 })

 export default rootReducer;