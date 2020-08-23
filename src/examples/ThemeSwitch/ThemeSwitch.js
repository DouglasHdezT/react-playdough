import React from 'react';

import Button from '../../components/Button/Button';
import './ThemeSwitch.css';

const ThemeSwitch = ({ changeThemeHandler, darkmode }) => {
    const buttonText = darkmode ? "Lights up" : "Lights down";
    
    return (
        <section className="switcher">
            <Button
                style={{
                    position: "fixed",
                    left: 16,
                    top: 16
                }}
                onClick={changeThemeHandler}
                value={buttonText} />
        </section>
    );
}

export default ThemeSwitch;