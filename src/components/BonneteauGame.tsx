import React from 'react';
import './styles.css';
import Cup from './Cup/'

interface Props{

}

const BonneteauGame = (props:Props)=>{
    return (
        <div className="main">
            <Cup/>
            <Cup/>
            <Cup/>
        </div>
    );
}

export default BonneteauGame;