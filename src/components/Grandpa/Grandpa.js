import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

/**
*  context api
* 1. Call createContext with a default value
* 2. Set a variable of the context to use it in other places
* 3. Make sure you export the context to use it in other places
* 4. Wrap you child content using ConstantContextName.Provider
* 5. Provide a value
* 6. To consume the context from child component 
* 7. useContext hook and you will need to pass the contextName
* 8. Make sure you take notes
*/

export const ringContext = createContext("diamond")

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    const ornaments = "Surprise: Diamond ring"
    return (
        <ringContext.Provider value={ornaments}>
            <div className='grandpa'>
            <h4>Grandpa</h4>
            <button onClick={handleBuyAHouse}>Buy A House</button>
            <p>house: {house}</p>
            <div style={{display: "flex"}}>
            <Father house = {house} ring = {ornaments}></Father>
            <Uncle house = {house}></Uncle>
            <Aunty house = {house}></Aunty>
            </div>
        </div>
        </ringContext.Provider>
    );
};

export default Grandpa;