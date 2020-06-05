import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://cdn57.androidauthority.net/wp-content/uploads/2020/04/FortNite-Mobile-video-screenshot-Apps-Weekly.jpg',
    'https://ichef.bbci.co.uk/news/1024/cpsprodpb/E909/production/_112375695_crucible976.jpg',
    'https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2020/Games/Minecraft/MinecraftDungeons-E.jpg'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const ImageSlider = () => {

    return (
        <div className="imageSlider-parent">
            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            {/* <span>Slide 1</span> */}
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            {/* <span>Slide 2</span> */}
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            {/* <span>Slide 3</span> */}
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default ImageSlider;