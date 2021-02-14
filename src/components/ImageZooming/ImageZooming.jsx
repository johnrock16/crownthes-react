import React from 'react';
import './ImageZooming.scss';

const ImageZooming = (props)=>{

    const {imgsrc,title,opacity=false,isSmall=false} = props; 
    let classAddeed=(isSmall)?'grid-image-zooming-smaller ':'grid-image-zooming-container ';
    classAddeed+=(opacity)?'':'image-zooming-no-opacity';
    const style={
        backgroundImage:`url(${imgsrc})`
    }
    
    return(
        <div className={`${classAddeed} image-zooming-container`}>
            <div className="image-zooming" style={style}>
                {(title)&&(<a className="image-zooming-text" href="#">{title}</a>)}
            </div>
        </div>
    )
}

export default ImageZooming;