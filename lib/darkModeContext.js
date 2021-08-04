import { useEffect, createContext, useContext } from "react";
import { useDarkMode } from "./useDarkMode";

export const DarkModeContext = createContext();

export default function DarkModeContextComp({ children }) {
	//Initialize dark mode hook
	const [darkMode, setDarkMode] = useDarkMode("dark", true);

	useEffect(() => {
		const windowExists = typeof window !== undefined;
		const noTheme = window.localStorage.getItem("dark") === null;
		//In case hook fails and can't set token -- defaults to dark theme
		if (windowExists && noTheme) {
			setDarkMode(true);
		}
	});

	return (
		<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

// Custom hook that shorthands the context!
export const DarkMode = () => useContext(DarkModeContext);
