import React from 'react';
import classes from './HSLColor.module.css';

const HSLColor = ({ h, s, l }) => {
    return (
        <div
            style={{
                backgroundColor: `hsl(${h}, ${s}%, ${l}%)`
            }}

            className={classes.color}/>
    );
}

export default HSLColor;