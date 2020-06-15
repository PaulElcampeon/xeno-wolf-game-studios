import React from 'react';
import { Slide } from 'react-slideshow-image';
import ImageSlideItem from './ImageSlideItem';

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

const ImageSlider = (props) => {
    
    const { images } = props;

    return (
        <div className="imageSlider-parent">
            <div className="slide-container">
                <Slide {...properties}>
                    {images.map((obj, key) => <ImageSlideItem key={key} image={obj.image} />)}
                </Slide>
            </div>
        </div>
    )
}

export default ImageSlider;