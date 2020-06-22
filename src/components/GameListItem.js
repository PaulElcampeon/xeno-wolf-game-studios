import React from 'react';

const GameListItem = (props) => {
    const { gameData } = props;
    const { releaseInfo, gameImages, gameInfo, downloadLink, title, itchioLink } = gameData;
    
    const handleClick = (link, e) => {
        window.location.href = link
    }

    return (
        <div className="gameListItem">
            <div className="gameListItem_left">
                <p><span>{title}</span> {releaseInfo}</p>
                <img className="gameListItem_image" alt={gameImages[0].image} src={gameImages[0].image} />
            </div>
            <div className="gameListItem_right">
                <p>{gameInfo}</p>
                <div className="gameListBtnHolder">
                    {/* <div>
                        {downloadLink[0].link !== "" ? <button className="gameListBtn windowBtn" onClick={(e) => { handleClick(downloadLink[0].link, e) }}> DOWNLOAD WINDOW </button> : ""}
                    </div>
                    <div>
                        {downloadLink[1].link !== "" ? <button className="gameListBtn macBtn" onClick={(e) => { handleClick(downloadLink[1].link, e) }}> DOWNLOAD MAC </button> : ""}
                    </div> */}
                    <div>
                        {itchioLink !== "" ? <input className="itchBtn" type="image" alt="itchBtn" src="/images/itchicon.png" onClick={(e) => { handleClick(itchioLink) }} /> : ""}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GameListItem;
