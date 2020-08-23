import React from 'react';
import classes from './HSLPicker.module.css';

import Color from './HSLColor/HSLColor';

const HSLPicker = ({ hue }) => {
    const colors = [];

    const lstep = 20;
    const sstep = 20;

    const cols = Math.floor(100 / sstep) + 1;
    const rows = Math.floor(100 / lstep) + 1;

    for (let l = 0; l<= 100; l+= lstep) { 
        for (let s = 0; s<= 100; s+=sstep) {
            colors.push(
                <Color key={`${hue} ${s} ${l}`} h={hue} s={s} l={l}/>
            );
        }
    }

    return (
        <div
            style={{
                gridTemplate: `repeat(${rows}, 1fr) / repeat(${cols}, 1fr)`
            }}
            className={classes.picker}>
            {colors}
        </div>
    );
}

export default HSLPicker;