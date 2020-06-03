import { GET_PROJECTS, updateProjects, updateMessage } from '../actions/index';
import { getProjects } from '../../comms/commsService'
import store from '../index';

const projects =  [
    {
        releaseInfo: "Realase: 12th of Deceomeber 2015",
        gameImageLink: "https://techcrunch.com/wp-content/uploads/2018/07/fortnite03.jpg?w=730&crop=1", 
        gameInfo: "adauhudahwduoawhdoad widohaiowdjiao wadwojpdadjo wda asadsdasda sdasdasd sad asdasdad ssas dasd sd asdasdada dasdasdasdadad asdasdasd asdas dasdasd asdasdasd asdas dasd asdasdasd ads asdasdas dasdasd asdasdasdasd asdasdadas daas asdas das dasdas dasd asdasdasd asdasdasdasdasd asd asdasdasdasdasd dsasdas dasd asdasdwdawdwada awdawd dwada wad", 
        downloadLink:""
    },
    {
    
        releaseInfo: "Realase: 12th of Deceomeber 2015",
        gameImageLink: "https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2020/Games/Minecraft/MinecraftDungeons-E.jpg", 
        gameInfo: "adauhudahwduoawhdoad widohaiowdjiao wadwojpdadjo wda asadsdasda sdasdasd sad asdasdad ssas dasd sd asdasdada dasdasdasdadad asdasdasd asdas dasdasd asdasdasd asdas dasd asdasdasd ads asdasdas dasdasd asdasdasdasd asdasdadas daas asdas das dasdas dasd asdasdasd asdasdasdasdasd asd asdasdasdasdasd dsasdas dasd asdasdwdawdwada awdawd dwada wad", 
        downloadLink:""
    },
    {
    
        releaseInfo: "Realase: 12th of Deceomeber 2015",
        gameImageLink: "https://ichef.bbci.co.uk/images/ic/1280xn/p085csfc.png", 
        gameInfo: "adauhudahwduoawhdoad widohaiowdjiao wadwojpdadjo wda asadsdasda sdasdasd sad asdasdad ssas dasd sd asdasdada dasdasdasdadad asdasdasd asdas dasdasd asdasdasd asdas dasd asdasdasd ads asdasdas dasdasd asdasdasdasd asdasdadas daas asdas das dasdas dasd asdasdasd asdasdasdasdasd asd asdasdasdasdasd dsasdas dasd asdasdwdawdwada awdawd dwada wad", 
        downloadLink:""
    }
]

export const projectsMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case GET_PROJECTS:
            //temporary
            store.dispatch(updateProjects(projects));

            // getProjects()
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.status && data.status !== 202) {
            //             store.dispatch(updateMessage("Something wrong happened"))
            //         } else {
            //             store.dispatch(updateProjects(data.projects));
            //             store.dispatch(updateMessage(null))
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error.message)
            //         store.dispatch(updateMessage("Something wrong happened"))
            //     })
            break;
        default:
            next(action);
    }
}

export default projectsMiddleware;