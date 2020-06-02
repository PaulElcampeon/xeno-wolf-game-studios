import React, {Component} from 'react';
import GameList from './GameList';

class Projects extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <GameList projects={
                    [
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
                    ]}/>
            </div>
        )
    }
}

export default Projects;