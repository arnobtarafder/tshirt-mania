import React, { useState } from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div className='grandpa'>
            <h4>Grandpa</h4>
            <button onClick={handleBuyAHouse}>Buy A House</button>
            <p>house: {house}</p>
            <div style={{display: "flex"}}>
            <Father house = {house}></Father>
            <Uncle house = {house}></Uncle>
            <Aunty house = {house}></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;