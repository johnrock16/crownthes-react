import React from 'react';
import ClothesGrid from '../../components/ClothesGrid/ClothesGrid';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HorizontalGridImages from '../../components/HorizontalGridImages/HorizontalGridImages';
import InfoGrideImage from '../../components/InfoGrideImage/InfoGrideImage';
import Slider from '../../components/Slider/Slider';
import {HORIZONTAL_CARD_IMAGES} from '../../constants/HorizontalCardImages';
import './Home.scss'

const Home=()=>{

    return(
        <div>
            <Header/>
            <div className="main-container">
                <div id='content-container' className="content-container">
                    <Slider/>
                </div>
                <ClothesGrid/>
                <InfoGrideImage/>
                <div className="grid-horizontal-images">
                    <HorizontalGridImages cards={HORIZONTAL_CARD_IMAGES}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;