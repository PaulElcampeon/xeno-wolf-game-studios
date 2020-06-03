import React from 'react';

const Game = (props) => {

    const { gameData } = props
    const { header, info, imageLinks, specifications } = gameData;

    return (
        <div>
            <div>
                <h1>{header}</h1>
            </div>
            <div>
                <div>{info}</div>
                <div><img /></div>
                <div>{specifications}</div>
            </div>
        </div>
    )
}

export default Game;