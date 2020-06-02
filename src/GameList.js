import React, {Component} from 'react';
import GameListItem from './GameListItem';

class GameList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {projects} = this.props;
        console.log(projects);
        return(
            <div>
                <ul>
                    {projects.map((data, key) => <GameListItem key={key} gameData={data}/>)}
                </ul>
            </div>
        )
    }
}

export default GameList;