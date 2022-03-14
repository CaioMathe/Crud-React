import React from 'react';
import './Wind.css'

const Wind = ({props}) => {
    return ( 
        <div className='Box-container'>
            <div className='box_barra'></div>
            <div>
            {props}
            </div>
        </div>
     );
}
 
export default Wind;