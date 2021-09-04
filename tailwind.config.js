module.exports = {
	important: true,
	darkMode: "class",
	purge: false,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		borderColor: (theme) => ({
			...theme("colors"),
			accent: "var(--color-border-accent)",
		}),
		placeholderColor: (theme) => ({
			...theme("colors"),
			primary: "var(--color-placeholder-primary)",
		}),
		maxHeight: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
			100: "100px",
			200: "200px",
			250: "250px",
			300: "300px",
			315: "315px",
		},
		extend: {
			zIndex: {
				"-1": "-1",
			},
			backgroundColor: {
				primary: "var(--color-bg-primary)",
				secondary: "var(--color-bg-secondary)",
				inverse: "var(--color-bg-inverse)",
				accent: "var(--color-bg-accent)",
			},
			textColor: {
				accent: "var(--color-text-accent)",
				primary: "var(--color-text-primary)",
				secondary: "var(--color-text-secondary)",
				inverse: "var(--color-text-inverse)",
			},
			colors: {
				"accent-1": "#FAFAFA",
				"accent-2": "#EAEAEA",
				"accent-7": "#333",
				success: "#0070f3",
				cyan: "#79FFE1",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
			},
			boxShadow: {
				small: "0 5px 10px rgba(0, 0, 0, 0.12)",
				medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},
			screens: {
				xxs: "300px",
				// => @media (min-width: 540px) { ... }
				xsm: "540px",
				// => @media (min-width: 540px) { ... }
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "1024px",
				// => @media (min-width: 1024px) { ... }

				lg: "1280px",
				// => @media (min-width: 1280px) { ... }

				xl: "1536px",
				// => @media (min-width: 1536px) { ... }
			},
			minHeight: {
				0: "0",
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
				100: "100px",
				200: "200px",
				250: "250px",
				300: "300px",
				315: "315px",
			},
		},
	},
};
