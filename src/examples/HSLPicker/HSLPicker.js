import React, { useState } from 'react';
import './HSLPicker.css';

import SectTitle from '../../components/SectTitle/SectTitle';
import HUEInput from '../../components/HUEInput/HUEInput';
import Picker from '../../components/HSLPicker/HSLPicker';

const HSLPicker = props => {
    const [hue, setHue] = useState(0); 

    return (
        <section className="hsl-picker">
            <SectTitle> HSL Color Picker </SectTitle>
            <HUEInput
                width="50%"
                hue={hue}
                onhuechange={event => { 
                    const newHue = event.target.value;
                    setHue(newHue);
                }} />
            <article>
                <Picker hue={hue}/>
            </article>
        </section>
    );
}

export default HSLPicker;