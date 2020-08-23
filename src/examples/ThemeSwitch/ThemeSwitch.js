import React from 'react';

import Button from '../../components/Button/Button';
import './ThemeSwitch.css';

const ThemeSwitch = ({ changeThemeHandler, darkmode }) => {
    const buttonText = darkmode ? "Lights up" : "Lights down";
    
    return (
        <section className="switcher">
            <Button
                onClick={changeThemeHandler}
                value={buttonText} />
        </section>
    );
}

export default ThemeSwitch;