import React, { useEffect } from 'react';

const SimpleButton=({children,style={},...otherprops})=>{
    console.log({...styleSheet,...style})
    return(
        <div style={{...styleSheet,...style}} className="post-button" {...otherprops}>
            {children}
        </div>
    );
}

const styleSheet={
    display:'flex',
    backgroundColor:'#00000020',
    fontSize:48,
    color:'white',
}

export default SimpleButton;