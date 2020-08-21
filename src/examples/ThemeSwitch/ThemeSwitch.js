import React from 'react';

import Button from '../../components/Button/Button';
import './ThemeSwitch.css';

const ThemeSwitch = ({ changeThemeHandler }) => {
    return (
        <section className="switcher">
            <Button
                onClick={changeThemeHandler}
                value="Lights up" />
        </section>
    );
}

export default ThemeSwitch;