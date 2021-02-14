import React from 'react';
import ImageZooming from '../ImageZooming/ImageZooming';

const INFO_GRIDE_IMAGE_CARDS=[
    {title:'BE YOU',btnText:'SEE MORE',imgText:'Los Angeles', isSmall:true, imgsrc:'https://images.pexels.com/photos/4626085/pexels-photo-4626085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia consequatur omnis magni suscipit quasi praesentium est ducimus! Soluta numquam saepe laborum fuga reiciendis molestiae! Deleniti dignissimos corporis tenetur eos.'},
    {title:'BE YOU',btnText:'SEE MORE',imgText:'NYC', isSmall:true, opacity:true, inverted:true, imgsrc:'https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia consequatur omnis magni suscipit quasi praesentium est ducimus! Soluta numquam saepe laborum fuga reiciendis molestiae! Deleniti dignissimos corporis tenetur eos.'},
    {title:'BE YOU',btnText:'SEE MORE',imgText:'London', isSmall:true, imgsrc:'https://images.pexels.com/photos/799343/pexels-photo-799343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia consequatur omnis magni suscipit quasi praesentium est ducimus! Soluta numquam saepe laborum fuga reiciendis molestiae! Deleniti dignissimos corporis tenetur eos.'},
]

const InfoGrideImage=()=>{

    return(
        <div className="grid-images-container">
            {(INFO_GRIDE_IMAGE_CARDS.map((card)=>(
                <InfoGrideImageCard {...card} />
            )))}
        </div>
    );
}

const InfoGrideImageCard=({title,text,btnText,imgText,imgsrc,isSmall,inverted=false,opacity=true})=>{
    return(
        <div className="grid-image-container padding">
            {(inverted)&&(<ImageZooming title={imgText} imgsrc={imgsrc} opacity={opacity} isSmall={isSmall}/>)}
            <span className="title underline">{title}</span>
            <span className="text">{text}</span>
            <button className="grid-button post-button">{btnText}</button>
            {(!inverted)&&(<ImageZooming title={imgText} opacity={opacity} imgsrc={imgsrc} isSmall={isSmall}/>)}
        </div>
    )
}

export default InfoGrideImage;