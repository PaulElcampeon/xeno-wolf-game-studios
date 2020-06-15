import React from 'react';

const ImageSlideItem = (props) => {
    const { image } = props
    return (
        <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${image})` }}></div>
        </div>
    )
}

export default ImageSlideItem;