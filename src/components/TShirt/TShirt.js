import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, price, picture} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            
            <div className="button">
            <button onClick={() => handleAddToCart (tshirt)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default TShirt;