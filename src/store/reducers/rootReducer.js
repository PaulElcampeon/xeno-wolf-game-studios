import { combineReducers } from 'redux';
import loggedInReducer from './loggedInReducer';
import updateMessageReducer from './updateMessageReducer';
import updateTokenReducer from './updateTokenReducer';
import projectsReducer from './projectsReducer';
import logginInReducer from './logginInReducer';

const rootReducer = combineReducers({
    loggingIn: logginInReducer,
    projects: projectsReducer,
    loggedIn: loggedInReducer,
    genericMessage: updateMessageReducer,
    token: updateTokenReducer
})

export default rootReducer;