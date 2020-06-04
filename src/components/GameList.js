import React from 'react';
import { useSelector } from "react-redux";
import GameListItem from './GameListItem';

const GameList = (props) => {
    const storeExtractor = useSelector(state => state);

    const { projects } = storeExtractor;

    return (
        <div>
            <ul className="gameList_unorderedList">
                {projects.map((data, key) => <GameListItem key={key} gameData={data} />)}
            </ul>
        </div>
    )
}

export default GameList;