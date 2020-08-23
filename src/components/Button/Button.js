import React from 'react';
import classes from './Button.module.css';

const Button = ({value, onClick, style}) => {
	return (
		<button
			style={style}
			onClick={onClick}
			className={classes.styled}>
			{ value }
		</button>
	);
}

export default Button;