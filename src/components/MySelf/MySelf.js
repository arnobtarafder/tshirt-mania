import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ring}) => {
    return (
        <div>
            <h2>It's me the boy myself</h2>
            <h5><small>house: {house}</small></h5>
            <Special ring = {ring}></Special>
        </div>
    );
};

export default MySelf;