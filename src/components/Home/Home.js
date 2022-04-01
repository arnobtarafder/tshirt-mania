import React from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTShirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                <h3>{tshirts.length}</h3>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;