import React from 'react';
import ImageZooming from '../ImageZooming/ImageZooming';

const HorizontalGridCard = (props)=>{

    const {imgsrc, title, text, price} = props;

    return(
        <div className="grid-image-horizontal-container grid-image-container padding">
            <ImageZooming imgsrc={imgsrc}/>
            <span className="title">{title}</span>
            <span className="text text-center small-padding">{text}</span>
            <span className="text text-center small-padding">{price}</span>
            <button className="dark post-button">See More</button>
        </div>
    );
}

export default HorizontalGridCard;