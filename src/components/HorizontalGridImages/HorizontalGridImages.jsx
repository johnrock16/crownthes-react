import React, { useEffect, useState } from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import HorizontalGridCard from './HorizontalGridCard';
import './HorizontalGridImages.scss';

const initialState={
    listCards:{},
    enumCards:[],
    currentCategory:'',
}

const HorizontalGridImages=({cards,initialCategory=''})=>{

    const [state,setState] = useState(initialState);

    useEffect(()=>{
        console.log(cards)
        const enumCards=Object.keys(cards).map((category)=>(category));
        setState((pv)=>({...pv,enumCards,currentCategory:(initialCategory)?initialCategory:enumCards[0]}));
    },[]);

    const onHandleChangeCategory=(value)=>{
        let index=value+state.enumCards.indexOf(state.currentCategory);
        if(index==state.enumCards.length) index=0;
        if(index==-1) index=state.enumCards.length-1;
        setState((pv)=>({...pv,currentCategory:state.enumCards[index]}));
    }

    return(
        <div>
            <span className='title padding'>{(state.currentCategory) && (state.currentCategory.toUpperCase())}</span>
            <div className="grid-images-horizontal-container grid-images-container">
                { (state.currentCategory && cards) && (
                    cards[state.currentCategory].map(({title,price,imgsrc,text})=>(
                        <HorizontalGridCard title={title} text={text} price={price} imgsrc={imgsrc}/>
                    )))
                }
                <SimpleButton style={{left:0,zIndex:4, position:'absolute'}} onClick={()=>{onHandleChangeCategory(-1)}}> &#8249;</SimpleButton>
                <SimpleButton style={{right:0,zIndex:4, position:'absolute'}} onClick={()=>{onHandleChangeCategory(+1)}}> &#8250;</SimpleButton>
            </div>
            
        </div>   
    )
}

export default HorizontalGridImages;