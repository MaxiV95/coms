/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#1a1a1a",
				orange_1: "#D9730D",

				light: "#f5f5f5",
			},
		},
	},
	plugins: [],
};
