const ImageminWebpWebpackPlugin = require(`imagemin-webp-webpack-plugin`);

function buildEnv() {
	const envVariable = (process.env['ENV'] || process.env['env'] || '').trim().toLowerCase();
	console.log(`Reading Env as "${envVariable}"`);

	if (envVariable === 'prod' || envVariable === 'production') {
		return { backendURL: 'https://h7dx30hf75.execute-api.us-east-1.amazonaws.com/prod' };
	} else {
		return { backendURL: 'https://d55mlb3nrk.execute-api.us-east-1.amazonaws.com/dev' };
	}
}

module.exports = {
	async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			...defaultPathMap,
			// Add your reroutes here. Example:
			// Reroutes the '/' path to '/home'
			// '/': { page: '/home' },
		};
	},

	// Custom webpack configurations
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.(png|jpe?g)$/i,
			use: [
				{
					// Allows for png and jpeg resizing
					loader: `webpack-image-resize-loader`,
				},
			],
		});

		// Minifies images and create webp alternative for jpeg, png and gifs
		config.plugins.push(new ImageminWebpWebpackPlugin());
		return config;
	},

	env: buildEnv(),

	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	swcMinify: true,
};
