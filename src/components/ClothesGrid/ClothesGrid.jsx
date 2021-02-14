import React from 'react';
import ImageZooming from '../ImageZooming/ImageZooming';
// import './ClothesGrid.scss';

const ClOTHES_GRID_CARDS={
    top:[
        { title:'COATS', opacity:true, imgsrc:'https://images.pexels.com/photos/3509424/pexels-photo-3509424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        { title:'HATS', opacity:true, imgsrc:'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    ],
    bottom:[
        { title:'GLASSES',opacity:true, imgsrc:'https://images.pexels.com/photos/1781983/pexels-photo-1781983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        { title:'SHOES',opacity:true, imgsrc:'https://images.pexels.com/photos/220492/pexels-photo-220492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        { title:'PANTS',opacity:true, imgsrc:'https://images.pexels.com/photos/533733/pexels-photo-533733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    ]
}

const ClothesImageCard=({title,imgsrc,opacity})=>(
    <div className="grid-image-horizontal-container no-pading grid-image-container">
        <ImageZooming title={title} imgsrc={imgsrc} opacity={opacity} />
    </div>
)


const ClothesGrid=()=>{
    return(
        <div className="clothes-grid grid-images-container margin">
            <div className="clothes-grid-top">
                {(ClOTHES_GRID_CARDS.top.map((card)=>(
                    <ClothesImageCard {...card} />
                )))}
            </div>
            <div className="clothes-grid-footer">
                {(ClOTHES_GRID_CARDS.bottom.map((card)=>(
                    <ClothesImageCard {...card} />
                )))}
            </div>
        </div>
    );
}

export default ClothesGrid;