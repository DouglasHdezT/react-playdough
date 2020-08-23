import React, { useState } from 'react';
import classes from './HUEInput.module.css';

const HUEInput = ({ hue, onhuechange, width }) => {
    const [step , setStep] = useState(10)
    return (
        <div className={classes["hue-container"]} style={{width: width}}>
            <input
                style={{ width: "50%" }}
                id="step-picker"
                type="range"
                min={1}
                max={50}
                step={1}
                value={step}
                onChange={(event) => { setStep(event.target.value) }} />
            <label className={classes["hue-label"]} htmlFor="step-picker"> Salto: {step} </label>
            
            <input
                style={{ width: "100%" }}
                id="hue-picker"
                type="range"
                min={0}
                max={360}
                step={step}
                value={hue}
                onChange={onhuechange} />
            <label className={classes["hue-label"]} htmlFor="hue-picker"> HUE: {hue} </label>
        </div>
    );
}

export default HUEInput;