import React, { useState } from "react";
import "./App.css";

import StickyList from './examples/StickyList/StickyList';
import ThemeSwitch from './examples/ThemeSwitch/ThemeSwitch';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const themeClass = darkMode ? "dark" : "light";

	return (
		<div className={`App ${themeClass}`}> 
			<StickyList/>
			<ThemeSwitch changeThemeHandler={() => {
				setDarkMode(!darkMode)
			}}/>
		</div>
	);
}

export default App;
