import React from 'react';
import TShirt from '../TShirt/TShirt';

const Cart = ({cart, handleRemoveFromCart}) => {
    // Conditional rendering options 
    // 1. Element variable
    let command;
    if(cart.length === 0){
        command = <p>Please add some items !!!</p>
    }
    else if(cart.length === 1) {
        command = <p>please add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h3>Item Selected: {cart.length}</h3>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>Remove</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;