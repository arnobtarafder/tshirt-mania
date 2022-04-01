import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // Conditional rendering options 
    // 1. Element variable
    // 2. Ternary operator condition ? true : false
    // 3. && Operator (shorthand)
    // 4. ||
    let command;
    if(cart.length === 0 ){
        command = <div>
            <h5>ohh Kipta, khoroch kor</h5>
            <p>kinos na ken</p>
        </div>
    }
    else if(cart.length === 1){
        command = <p>Please add more...</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h3>Item Selected: {cart.length}</h3>
            {command}
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>Remove</button>
                    
                    </p>)
            }
            <br />
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                </div>}
                
                {cart.length === 0 || <p className='orange'>
                    YAY! You are a good person
                    </p>}
                    
                    {cart.length === 4 && <button className='orange'>Review Order</button>}

            { cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button> }


         <br /><br />   <marquee behavior="" direction="left">            {command}</marquee>
        </div>
    );
};

export default Cart;