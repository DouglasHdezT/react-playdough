import React from 'react';
import classes from './SectTitle.module.css';


const SectTitle = props => {
    return (
        <h2 className={classes["sect-title"]} > { props.children } </h2>
    );
}

export default SectTitle;