import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(ringContext)
    return (
        <div>
            <h2>It's me Aunty</h2>
            <p>house: {house}</p>
            <p>{ring}</p>
        </div>
    );
};

export default Aunty;