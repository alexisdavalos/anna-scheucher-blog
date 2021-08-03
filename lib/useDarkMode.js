import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
	const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
	useEffect(() => {
		if (typeof window !== undefined) {
			document.documentElement.classList.add(
				"bg-primary",
				"transition-all",
				"duration-500",
				"ease-linear"
			);
			if (darkMode === true) {
				document.documentElement.classList.add("dark");
				document.documentElement.classList.remove("light");
			} else {
				document.documentElement.classList.add("light");
				document.documentElement.classList.remove("dark");
			}
		}
	}, [darkMode]);

	return [darkMode, setDarkMode];
};
