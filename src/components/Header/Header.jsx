import React from 'react';
import './Header.scss';

const Header=()=>{

    return(
        <div className="header">
            <div className="header-title">
                <h1 className="header-title-text">Crownthes</h1>
            </div>
            <div className="header-tabs">
                <h1 className="header-tabs-text">Hats</h1>
                <h1 className="header-tabs-text">Coats</h1>
                <h1 className="header-tabs-text">Pants</h1>
                <h1 className="header-tabs-text">Shoes</h1>
            </div>
        </div>
    )
}

export default Header;