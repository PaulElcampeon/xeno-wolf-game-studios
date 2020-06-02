import React from 'react';

const GameListItem = (props) => {
    const {gameData} = props;
    const {releaseInfo, gameImageLink, gameInfo, downloadLink} = gameData;

    console.log(releaseInfo)
    console.log(gameImageLink)
    console.log(gameInfo)

    const handleClick = (e) => {
        //fetch api for download link
    }

    return (
        <div className="gameListItem">
            <div className="gameListItem_left">
                <p>{releaseInfo}</p>
                <img className="gameListItem_image" alt={gameImageLink} src={gameImageLink}/>
            </div>
            <div className="gameListItem_right">
                <p>{gameInfo}</p>
                <button onClick={() => {this.handleClick()}}> DOWNLOAD </button>
            </div>
        </div>
    )
}

export default GameListItem;