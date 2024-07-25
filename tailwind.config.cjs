module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { 
			animation: {
			'spin-slow': 'spin 3s linear infinite',
			'spin-medium': 'spin 1.5s linear infinite',
			'spin-fast': 'spin 0.75s linear infinite',
		  },
		},
	},
	plugins: [],
};
