import React from 'react';
import classes from './Button.module.css';

const Button = ({value, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={classes.styled}>
			{ value }
		</button>
	);
}

export default Button;