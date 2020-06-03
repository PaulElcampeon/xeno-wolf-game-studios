import { UPDATE_PROJECTS } from "../actions"

const projectsReducer = (state = [], action) => {
    switch(action.type) {
        case UPDATE_PROJECTS: 
            return action.projects;
        default:
            return state;
    }
}

export default projectsReducer;