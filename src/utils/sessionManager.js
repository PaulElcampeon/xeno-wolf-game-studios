import store from '../store/index';
import { updateMessage, updateToken, loggedInAction } from '../store/actions/index';

class SessionManager {
    constructor() {
        this.unsubscribeListener = null;
    }

    static storeUserData = (userData) => {
        sessionStorage.setItem('xeno-wolf-game-studios', JSON.stringify(userData));
    }

    static doesUserDataExist = () => {
       return sessionStorage.getItem('xeno-wolf-game-studios');
    }

    static getUserData = () => {
        return JSON.parse(sessionStorage.getItem('xeno-wolf-game-studios'));
    }

    static removeUserData = () => {
        this.unsubscribeListener();
        sessionStorage.removeItem('xeno-wolf-game-studios')
    }

    static updateSession = () => {
        this.unsubscribeListener = store.subscribe(()=> {
            sessionStorage.setItem('xeno-wolf-game-studios', JSON.stringify(store.getState()));
        })
    }

    static restoreSession = () => {
        if (this.doesUserDataExist()) {
            if (!this.unsubscribeListener) {
                this.updateSession()
            }
            const userData = this.getUserData();
            store.dispatch(updateToken(userData.token));
            store.dispatch(loggedInAction(true));
            store.dispatch(updateMessage(null))
        }
    }
}

export default SessionManager;