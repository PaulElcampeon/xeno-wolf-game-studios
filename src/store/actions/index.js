export const LOGIN = 'LOGIN'; //should be a middleware
export const LOGOUT = 'LOGOUT';//should be a middleware
export const LOGGED_IN = 'LOGGED_IN';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const GET_PROJECTS = 'GET_PROJECTS';


export const getProjects = () => {
    return {
        type: GET_PROJECTS    
    }
}

export const updateToken = (token) => {
    return {
        type: UPDATE_TOKEN,
        token: token
    }
}

export const updateProjects = (projects) => {
    return {
        type: UPDATE_PROJECTS,
        projects: projects
    }
}

export const updateMessage = (message) => {
    return {
        type: UPDATE_MESSAGE,
        message: message
    }
}

export const loginAction = (credential) => {
    return {
        type: LOGIN,
        credential: credential
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

export const loggedInAction = (loggedIn) => {
    return {
        type: LOGGED_IN,
        loggedIn: loggedIn
    }
}