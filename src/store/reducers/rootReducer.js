import { combineReducers } from 'redux';
import loggedInReducer from './loggedInReducer';
import updateMessageReducer from './updateMessageReducer';
import updateTokenReducer from './updateTokenReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    loggedIn: loggedInReducer,
    genericMessage: updateMessageReducer,
    token: updateTokenReducer
})

export default rootReducer;