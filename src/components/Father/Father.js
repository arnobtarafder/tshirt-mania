import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house, ring}) => {
    return (
        <div>
            <h2>It's me Father</h2>
            <p>house : {house}</p>
            <div className="children" style={{display: "flex"}}>
            <MySelf house = {house} ring = {ring}></MySelf>
            <Brother house = {house}></Brother>
            <Sister house = {house}></Sister>
            </div>
        </div>
    );
};

export default Father;