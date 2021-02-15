import React, { useEffect, useState } from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import './Slider.scss';

const SLIDES=[
    {imgsrc:'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {imgsrc:'https://images.pexels.com/photos/5480739/pexels-photo-5480739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {imgsrc:'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
]

const initialState={
    previousSlideIndex:0,
    currentSlideIndex:1,
    nextSlideIndex:2,
}

const Slider=()=>{

    const [state,setState] = useState(initialState);
    const {previousSlideIndex, currentSlideIndex, nextSlideIndex} = state;

    const onHandleChangeCurrentSlide=(value)=>{
        let current, previous, next=0;
        current=value;
        if(current<0){
            current=SLIDES.length-1
        }
        if(current>SLIDES.length-1){
            current=0;
        }
        previous=current-1;
        next=current+1
        if(current==0){
            previous=SLIDES.length-1;
        }
        if(current===SLIDES.length-1){
            next=0;
        }
        setState((pv)=>({...pv,previousSlideIndex:previous, currentSlideIndex:current, nextSlideIndex:next}));
    }

    return(
        <div className="slider-container">
            <div style={{backgroundImage:`url(${SLIDES[previousSlideIndex].imgsrc})`}} className="slide-container previous-slide"></div>
            <div style={{backgroundImage:`url(${SLIDES[currentSlideIndex].imgsrc})`}} className="slide-container current-slide"></div>
            <div style={{backgroundImage:`url(${SLIDES[nextSlideIndex].imgsrc})`}} className="slide-container next-slide"></div>
 
            <SimpleButton style={{left:0,zIndex:4 ,position:'absolute'}} onClick={()=>{onHandleChangeCurrentSlide(currentSlideIndex-1)}}> &#8249;</SimpleButton>
            <SimpleButton style={{right:0,zIndex:4, position:'absolute'}} onClick={()=>{onHandleChangeCurrentSlide(currentSlideIndex+1);}}> &#8250;</SimpleButton>
        </div>
    );
}

export default Slider;