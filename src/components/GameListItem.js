import React from 'react';

const GameListItem = (props) => {
    const { gameData } = props;
    const { releaseInfo, gameImages, gameInfo, downloadLink, title } = gameData;

    console.log(releaseInfo)
    console.log(gameImages)
    console.log(gameInfo)
    console.log(downloadLink)

    const handleClick = (downloadLink, e) => {
        window.location.href = downloadLink
    }

    return (
        <div className="gameListItem">
            <div className="gameListItem_left">
                <p><span>{title}</span> {releaseInfo}</p>
                <img className="gameListItem_image" alt={gameImages[0].image} src={gameImages[0].image} />
            </div>
            <div className="gameListItem_right">
                <p>{gameInfo}</p>
                {downloadLink[0].link!==""? <button className="gameListBtn windowBtn" onClick={(e) => { handleClick(downloadLink[0].link, e) }}> DOWNLOAD WINDOW </button> :"" }
                {downloadLink[1].link!==""? <button className="gameListBtn macBtn" onClick={(e) => { handleClick(downloadLink[1].link, e) }}> DOWNLOAD MAC </button> :"" }
            </div>
        </div>
    )
}

export default GameListItem;