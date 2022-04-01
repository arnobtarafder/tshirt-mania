import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selected) => {
        const exists = cart.find(tshirt => tshirt._id === selected._id)
        if(!exists) {
            const newCart = [...cart, selected];
            setCart(newCart)
        }
        else{
            // alert("already added")
        }
    }

    const handleRemoveFromCart = (selected) => {
        const rest = cart.filter(tshirt => tshirt._id !== selected._id)
        setCart(rest)
    } 

    return (
        <div className='home-container'>
            <div className="tshirt-container">

                {
                    tshirts.map(tshirt => <TShirt
                        key = {tshirt._id}
                        tshirt = {tshirt}
                        handleAddToCart = {handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart = {cart}
                handleRemoveFromCart = {handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;