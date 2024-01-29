import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				dark: "hsla(0, 0%, 16.9%, 0.6)",
			},
			colors: {
				textHover: "rgba(182, 154, 45,1)",
			},
			keyframes: {
				toRight: {
					"0%": {
						left: "-25%",
					},
					"100%": {
						left: "100%",
					},
				},
				toLeft: {
					"0%": {
						left: "100%",
					},
					"100%": {
						left: "-25%",
					},
				},
			},
			animation: {
				hori: "toRight 5s infinite linear both alternate",
				horiRevert: "toLeft 5s infinite linear both alternate",
			},
		},
	},
	plugins: [],
};
export default config;
