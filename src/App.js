import React, { useState } from "react";
import "./App.css";

import StickyList from './examples/StickyList/StickyList';
import ThemeSwitch from './examples/ThemeSwitch/ThemeSwitch';
import HSLPicker from './examples/HSLPicker/HSLPicker';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const themeClass = darkMode ? "dark" : "light";

	return (
		<div className={`App ${themeClass}`}> 
			<ThemeSwitch darkmode={darkMode	} changeThemeHandler={() => {
				setDarkMode(!darkMode)
			}} />
			<StickyList/>
			<HSLPicker/>
		</div>
	);
}

export default App;
