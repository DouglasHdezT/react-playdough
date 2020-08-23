import React, { useState, useEffect } from 'react';
import './ColorShifter.css';

const ColorShifter = props => {
    const [color, setColorDiv] = useState({
        h: 0,
        l: "80%",
        s: "80%"
    });

    const updateColor = () => { 
        setColorDiv({
            h: (color.h + 50) % 360,
            s: color.s,
            l: getComputedStyle(document.querySelector(".App")).getPropertyValue("--light-percent")
        })
    }

    useEffect(() => { 
        const interval = setInterval(() => { 
            updateColor();
        }, 1000);

        return () => { 
            clearInterval(interval);
        }
    });

    return (
        <section className="shifter-container">
            <div style={{
                backgroundColor: `hsl(${color.h}, ${color.s}, ${color.l})`,
            }}></div>
        </section>
    );
}

export default ColorShifter;