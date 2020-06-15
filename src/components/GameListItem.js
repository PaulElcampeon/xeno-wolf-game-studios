import React from 'react';

const GameListItem = (props) => {
    const { gameData } = props;
    const { releaseInfo, gameImages, gameInfo, downloadLink, title } = gameData;

    console.log(releaseInfo)
    console.log(gameImages)
    console.log(gameInfo)

    const handleClick = (e) => {
        //fetch api for download link
    }

    return (
        <div className="gameListItem">
            <div className="gameListItem_left">
                <p><span>{title}</span> {releaseInfo}</p>
                <img className="gameListItem_image" alt={gameImages[0].image} src={gameImages[0].image} />
            </div>
            <div className="gameListItem_right">
                <p>{gameInfo}</p>
                <button onClick={() => { this.handleClick() }}> DOWNLOAD </button>
            </div>
        </div>
    )
}

export default GameListItem;