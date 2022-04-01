import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = ({house}) => {
    const ring = useContext(ringContext)
    return (
        <div>
            <h1>Sneha</h1>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Special;