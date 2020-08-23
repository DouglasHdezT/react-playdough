import React, { useState } from "react";
import "./App.css";

import StickyList from './examples/StickyList/StickyList';
import ThemeSwitch from './examples/ThemeSwitch/ThemeSwitch';
import HSLPicker from './examples/HSLPicker/HSLPicker';
import ColorShifter from './examples/ColorShifter/ColorShifter';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const themeClass = darkMode ? "dark" : "light";

	return (
		<div className={`App ${themeClass}`}> 
			<ThemeSwitch darkmode={darkMode	} changeThemeHandler={() => {
				setDarkMode(!darkMode)
			}} />
			<StickyList/>
			<HSLPicker />
			<ColorShifter/>
		</div>
	);
}

export default App;
